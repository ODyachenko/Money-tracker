import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TransactionType } from '../../redux/slices/transactionSlice';
import { BeatLoader } from 'react-spinners';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type FormType = {
  categories: string[];
  data: TransactionType;
  setData: (value: any) => void;
  isSend: boolean;
  setIsSend: (value: any) => void;
};

export default function Form({
  categories,
  data,
  setData,
  isSend,
  setIsSend,
}: FormType) {
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
  );
}
