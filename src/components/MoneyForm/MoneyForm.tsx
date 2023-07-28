import React, { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import './style.scss';

type TransactionType = {
  amount: number;
  category: string;
  description: string;
  date: string;
  time: string;
  type: string;
};

const initalState: TransactionType = {
  amount: 0,
  category: 'Choose the category',
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
        axios.post(URL, data);
        setData({ ...initalState, type: transaction });
      } catch (error: any) {
        console.error('Error:', error.message);
      } finally {
        setIsSend(false);
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
        />
      </label>
      <div className="money__settings settings">
        <select
          className="money__field money--category field"
          name="category"
          value={data.category}
          onChange={onChangeHandler}
        >
          <option>Choose the category</option>
          <option value="Shopping">Shopping</option>
          <option value="Subscription">Subscription</option>
          <option value="Food">Food</option>
        </select>
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
