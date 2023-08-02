import React, { ChangeEvent, useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import { TransactionType } from '../../redux/slices/transactionSlice';
import './style.scss';
import { useSelector } from 'react-redux';

type MoneyFormType = {
  transaction: string;
  categories: string[];
};

const initalState: TransactionType = {
  amount: 0,
  category: '',
  description: '',
  date: '',
  time: '',
  type: '',
};

const URL: string = 'https://64c39d3067cfdca3b65ffde1.mockapi.io';

export default function MoneyForm({ transaction, categories }: MoneyFormType) {
  const [data, setData] = useState({ ...initalState, type: transaction });
  const [isSend, setIsSend] = useState(false);
  const { accountBalance } = useSelector(
    (state: React.ComponentState) => state.balance
  );

  useEffect(() => {
    if (isSend) {
      postTransactionData();
      changeBalance();
    }
  }, [data, isSend]);

  async function postTransactionData() {
    try {
      await axios.post(`${URL}/Transaction`, data).then(() => {
        setData({ ...initalState, type: transaction });
        setIsSend(false);
      });
    } catch (error: any) {
      console.error('Error:', error.message);
    }
  }

  async function changeBalance() {
    if (data.type === 'income') {
      try {
        await axios.put(
          'https://64c39d3067cfdca3b65ffde1.mockapi.io/Balance/userBalance',
          {
            balance: String(Number(accountBalance) + Number(data.amount)),
          }
        );
      } catch (error: any) {
        console.error(error.message);
      }
    } else {
      try {
        await axios.put(
          'https://64c39d3067cfdca3b65ffde1.mockapi.io/Balance/userBalance',
          {
            balance: String(Number(accountBalance) - Number(data.amount)),
          }
        );
      } catch (error: any) {
        console.log(error.message);
      }
    }
  }

  function onChangeField(event: ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSend(true);
  }

  const onChangeSelect = (event: SelectChangeEvent) => {
    setData({ ...data, ['category']: event.target.value });
  };

  return (
    <form action="/" className="money__form" onSubmit={onSubmitHandler}>
      <h3 className="money__subtitle money-subtitle">How much?</h3>
      <label className="money__count money-count">
        $
        <input
          type="number"
          name="amount"
          value={data.amount}
          onChange={onChangeField}
          min="1"
          max="10000"
        />
      </label>
      <div className="money__settings settings">
        <FormControl fullWidth className="field">
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            value={data.category}
            onChange={onChangeSelect}
          >
            {categories.map((category) => {
              return (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <div className="money__group input-group">
          <input
            id="description"
            className="money__field money--description field"
            name="description"
            value={data.description}
            onChange={onChangeField}
            type="text"
            required
          />
          <label htmlFor="description">Description</label>
        </div>
        <input
          className="money__field money--date field"
          type="date"
          name="date"
          value={data.date}
          onChange={onChangeField}
          required
        />
        <input
          className="money__field money--time field"
          type="time"
          name="time"
          value={data.time}
          onChange={onChangeField}
          required
        />
        <button className="money__btn primary-btn" type="submit">
          {isSend ? <BeatLoader color="#fff" /> : 'Continue'}
        </button>
      </div>
    </form>
  );
}
