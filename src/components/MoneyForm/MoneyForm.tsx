import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import { TransactionType } from '../../redux/slices/transactionSlice';
import SucessPopup from '../SuccessPopup/SucessPopup';
import './style.scss';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type MoneyFormType = {
  transaction: string;
  categories: string[];
};

const date = new Date();

const initalState: TransactionType = {
  amount: 0,
  category: '',
  description: '',
  date: date.toISOString().slice(0, 10),
  time: date.toTimeString().slice(0, 5),
  type: '',
};

const URL: string = 'https://64c39d3067cfdca3b65ffde1.mockapi.io';

export default function MoneyForm({ transaction, categories }: MoneyFormType) {
  const [data, setData] = useState({ ...initalState, type: transaction });
  const [isSend, setIsSend] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
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
        setShowPopup(true);
      });
    } catch (error: any) {
      console.error('Error:', error.message);
    } finally {
      setTimeout(() => setShowPopup(false), 1000);
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
  function onChangeSelect(event: SelectChangeEvent) {
    setData({ ...data, ['category']: event.target.value });
  }
  function onChangeAmount(event: ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [event.target.name]: +event.target.value });
  }

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSend(true);
  }

  return (
    <>
      <form action="/" className="money__form" onSubmit={onSubmitHandler}>
        <h3 className="money__subtitle money-subtitle">How much?</h3>
        <label className="money__count money-count">
          $
          <input
            type="text"
            name="amount"
            value={data.amount}
            onChange={onChangeAmount}
            min="1"
            max="10000"
          />
        </label>
        <div className="money__settings settings">
          <FormControl className="field" fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              label="Category"
              value={data.category}
              onChange={onChangeSelect}
              sx={{
                borderRadius: '12px',
                marginBottom: '15px',
                '& fieldset': {
                  borderColor: '#f1f1fa',
                },
              }}
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
            placeholder="date"
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
      {showPopup && (
        <SucessPopup text="Transaction has been successfully&nbsp;added" />
      )}
    </>
  );
}
