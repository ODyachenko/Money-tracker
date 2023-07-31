import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import './style.scss';

export interface TransactionType {
  amount: number | string;
  category: string;
  description: string;
  date: string;
  time: string;
  type: string;
}

const initalState: TransactionType = {
  amount: 0,
  category: '',
  description: '',
  date: '',
  time: '',
  type: '',
};

const URL = 'https://64c39d3067cfdca3b65ffde1.mockapi.io/Transaction';

export default function MoneyForm({ transaction }: { transaction: string }) {
  const [data, setData] = useState({ ...initalState, type: transaction });
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    if (isSend) {
      try {
        axios.post(URL, data).then(() => {
          setData({ ...initalState, type: transaction });
          setIsSend(false);
        });
      } catch (error: any) {
        console.error('Error:', error.message);
      }
    }
  }, [data, isSend]);

  function onChangeHandler(event: any) {
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
            <MenuItem value="Shopping">Shopping</MenuItem>
            <MenuItem value="Subscription">Subscription</MenuItem>
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Transport">Public transport</MenuItem>
            <MenuItem value="Gas">Gas station</MenuItem>
            <MenuItem value="Pet">Pet store</MenuItem>
          </Select>
        </FormControl>
        <input
          className="money__field money--description field"
          name="description"
          value={data.description}
          onChange={onChangeHandler}
          type="text"
          placeholder="Description"
          required
        />
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
