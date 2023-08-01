import React, { ChangeEvent, useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import { TransactionType } from '../../redux/slices/transactionSlice';
import { setAccountBalance } from '../../redux/slices/balanceSlice';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';

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

const URL = 'https://64c39d3067cfdca3b65ffde1.mockapi.io';

export default function MoneyForm({ transaction, categories }: MoneyFormType) {
  const { accountBalance } = useSelector((state: any) => state.balance);
  const [data, setData] = useState({ ...initalState, type: transaction });
  const [isSend, setIsSend] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSend) {
      try {
        axios.post(`${URL}/Transaction`, data).then(() => {
          setData({ ...initalState, type: transaction });
          setIsSend(false);
          changeBalance();
        });
      } catch (error: any) {
        console.error('Error:', error.message);
      }
    }
  }, [data, isSend]);

  function changeBalance() {
    if (data.type === 'income') {
      dispatch(
        setAccountBalance(String(Number(accountBalance) + Number(data.amount)))
      );
    } else {
      dispatch(
        setAccountBalance(String(Number(accountBalance) - Number(data.amount)))
      );
    }
  }

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSend(true);
  }

  const handleChange = (event: SelectChangeEvent) => {
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
          onChange={onChangeHandler}
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
            onChange={handleChange}
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
            onChange={onChangeHandler}
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
          onChange={onChangeHandler}
          required
        />
        <input
          className="money__field money--time field"
          type="time"
          name="time"
          value={data.time}
          onChange={onChangeHandler}
          required
        />
        <button className="money__btn primary-btn" type="submit">
          {isSend ? <BeatLoader color="#fff" /> : 'Continue'}
        </button>
      </div>
    </form>
  );
}
