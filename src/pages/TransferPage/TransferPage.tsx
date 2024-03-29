import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import ArrowBack from '../../components/ArrowBack/ArrowBack';
import './style.scss';
import SucessPopup from '../../components/SuccessPopup/SucessPopup';
import { currentDate, currentTime } from '../../utils/getCurrentDate';

type TransferType = {
  amount: number;
  from: string;
  to: string;
  category: string;
  description: string;
  date: string;
  time: string;
  type: string;
};

const URL: string = 'https://64c39d3067cfdca3b65ffde1.mockapi.io/Transaction';
const initialState: TransferType = {
  amount: 0,
  from: '',
  to: '',
  category: 'Transfer',
  description: '',
  date: currentDate,
  time: currentTime,
  type: 'expense',
};

export default function TransferPage() {
  const [data, setData]: React.ComponentState = useState(initialState);
  const [isSend, setIsSend]: React.ComponentState = useState(false);
  const [showPopup, setShowPopup]: React.ComponentState = useState(false);

  useEffect(() => {
    if (isSend) {
      try {
        axios.post(URL, data).then(() => {
          setData(initialState);
          setIsSend(false);
          setShowPopup(true);
        });
      } catch (error: any) {
        console.error('Error', error.message);
      } finally {
        setTimeout(() => setShowPopup(false), 1000);
      }
    }
  }, [data, isSend]);

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [event.target.name]: event.target.value });
  }
  function onChangeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [event.target.name]: +event.target.value });
  }
  function onSubmitHandler(event: React.FormEvent) {
    event.preventDefault();
    setIsSend(true);
  }

  return (
    <section className="transfer money">
      <div className="container">
        <h2 className="money__title section-title">
          <ArrowBack path="/" />
          Transfer
        </h2>
        <form className="money__form" onSubmit={onSubmitHandler}>
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
              required
            />
          </label>
          <div className="money__settings settings">
            <div className="money__inner">
              <input
                className="money__field money--from field"
                name="from"
                value={data.from}
                onChange={onChangeHandler}
                type="text"
                placeholder="From"
                required
              />
              <span className="money__ico">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                >
                  <path
                    d="M14.0975 10.4475V11.1975C14.0975 11.69 14.0005 12.1776 13.812 12.6326C13.6236 13.0875 13.3474 13.5009 12.9991 13.8492C12.6509 14.1974 12.2375 14.4736 11.7826 14.6621C11.3276 14.8505 10.84 14.9475 10.3475 14.9475H7.90249C7.89093 15.3577 7.76742 15.7569 7.54533 16.1019C7.32325 16.4469 7.01104 16.7246 6.64249 16.905C6.33512 17.0586 5.9961 17.1382 5.65249 17.1375C5.1442 17.1405 4.64985 16.9713 4.24999 16.6575L1.46749 14.475C1.1965 14.2647 0.977174 13.9952 0.826298 13.6871C0.675421 13.379 0.596985 13.0405 0.596985 12.6975C0.596985 12.3545 0.675421 12.016 0.826298 11.7079C0.977174 11.3998 1.1965 11.1303 1.46749 10.92L4.24999 8.73751C4.58524 8.46995 4.98998 8.30379 5.41652 8.25861C5.84307 8.21343 6.27363 8.29112 6.65749 8.48251C7.16864 8.72699 7.56229 9.16378 7.75249 9.69751H13.325C13.4254 9.6945 13.5253 9.71167 13.6189 9.74801C13.7125 9.78435 13.7979 9.83912 13.8699 9.90906C13.942 9.97901 13.9992 10.0627 14.0383 10.1552C14.0774 10.2477 14.0975 10.3471 14.0975 10.4475Z"
                    fill="#D3BDFF"
                  />
                  <path
                    d="M21.4025 5.30253C21.4026 5.64552 21.3242 5.98399 21.1734 6.29206C21.0226 6.60013 20.8034 6.86966 20.5325 7.08003L17.75 9.26253C17.3445 9.57757 16.846 9.74904 16.3325 9.75003C15.9889 9.75072 15.6499 9.6711 15.3425 9.51753C14.8314 9.27304 14.4377 8.83625 14.2475 8.30253H8.6525C8.45358 8.30253 8.26282 8.22351 8.12217 8.08286C7.98151 7.9422 7.9025 7.75144 7.9025 7.55253V6.80253C7.9025 5.80796 8.29758 4.85414 9.00085 4.15088C9.70411 3.44761 10.6579 3.05253 11.6525 3.05253H14.0975C14.1066 2.63324 14.2328 2.22485 14.4617 1.87344C14.6906 1.52203 15.0131 1.24159 15.393 1.06377C15.7728 0.885946 16.1947 0.817819 16.6112 0.867075C17.0277 0.916331 17.4221 1.08101 17.75 1.34253L20.5325 3.52503C20.8034 3.7354 21.0226 4.00492 21.1734 4.31299C21.3242 4.62106 21.4026 4.95953 21.4025 5.30253Z"
                    fill="#7F3DFF"
                  />
                </svg>
              </span>
              <input
                className="money__field money--from field"
                name="to"
                value={data.to}
                onChange={onChangeHandler}
                type="text"
                placeholder="To"
                required
              />
            </div>
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
        {showPopup && (
          <SucessPopup text="Transaction has been successfully&nbsp;added" />
        )}
      </div>
    </section>
  );
}
