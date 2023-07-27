import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

export default function TransferPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    amount: 0,
    from: '',
    to: '',
    description: '',
    date: '',
    time: '',
  });

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  function onClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    console.log(data);
  }

  return (
    <section className="transfer money">
      <div className="container">
        <h2 className="money__title section-title">
          <svg
            className="money__back"
            onClick={() => navigate('/')}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
          >
            <path
              d="M1.37497 8.5L2.23814 7.64481L7.64794 2.285L1.37497 8.5ZM1.37497 8.5H2.59005M1.37497 8.5H2.59005M2.59005 8.5H23C23.1327 8.5 23.2598 8.55268 23.3536 8.64645C23.4474 8.74021 23.5 8.86739 23.5 9C23.5 9.13261 23.4474 9.25979 23.3536 9.35355C23.2598 9.44732 23.1327 9.5 23 9.5H2.59005H1.38294L2.23649 10.3536L7.59649 15.7136L7.59794 15.715C7.64481 15.7615 7.68201 15.8168 7.70739 15.8777C7.73277 15.9386 7.74584 16.004 7.74584 16.07C7.74584 16.136 7.73277 16.2014 7.70739 16.2623C7.68201 16.3232 7.64481 16.3785 7.59794 16.425L7.59794 16.425C7.55122 16.4713 7.49581 16.508 7.43489 16.5329C7.37397 16.5578 7.30874 16.5704 7.24294 16.57L7.24215 16.57C7.11127 16.5695 6.98584 16.5176 6.89278 16.4256C6.89257 16.4254 6.89236 16.4252 6.89215 16.425L1.23382 10.7667C1.23376 10.7666 1.2337 10.7665 1.23364 10.7665C0.765585 10.2978 0.502686 9.66242 0.502686 9C0.502686 8.3379 0.765333 7.70285 1.23297 7.23418C1.23325 7.2339 1.23354 7.23362 1.23382 7.23333L6.94204 1.5751L6.94255 1.5746C7.03623 1.48148 7.16295 1.42921 7.29505 1.42921C7.42714 1.42921 7.55386 1.48148 7.64755 1.5746L7.64794 1.575M2.59005 8.5L7.64794 1.575M7.64794 1.575C7.69481 1.62148 7.73201 1.67678 7.75739 1.73771C7.78277 1.79864 7.79584 1.86399 7.79584 1.93C7.79584 1.99601 7.78277 2.06136 7.75739 2.12229C7.73204 2.18313 7.69491 2.23837 7.64814 2.28481L7.64794 1.575Z"
              fill="#7F3DFF"
              stroke="white"
            />
          </svg>
          Transfer
        </h2>
        <h3 className="money__subtitle">How much?</h3>
        <label className="money__count">
          $
          <input
            type="number"
            name="amount"
            value={data.amount}
            onChange={onChangeHandler}
          />
        </label>
        <div className="money__settings">
          <div className="money__inner">
            <input
              className="money__field money--from"
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
              className="money__field money--from"
              name="to"
              value={data.to}
              onChange={onChangeHandler}
              type="text"
              placeholder="To"
              required
            />
          </div>
          <input
            className="money__field money--description"
            name="description"
            value={data.description}
            onChange={onChangeHandler}
            type="text"
            placeholder="Description"
            required
          />
          <input
            className="money__field money--date"
            type="date"
            name="date"
            value={data.date}
            onChange={onChangeHandler}
            placeholder="Date"
            required
          />
          <input
            className="money__field money--time"
            type="time"
            name="time"
            value={data.time}
            onChange={onChangeHandler}
            placeholder="Time"
            required
          />
          <button
            onClick={onClickHandler}
            className="money__btn primary-btn"
            type="submit"
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}
