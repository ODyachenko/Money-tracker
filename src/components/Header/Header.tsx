import axios from 'axios';
import { useEffect, useState } from 'react';
import { TransactionType } from '../MoneyForm/MoneyForm';
import avatar from '../../assets/img/avatar.png';
import notification from '../../assets/img/notification.svg';
import './style.scss';

const URL = 'https://64c39d3067cfdca3b65ffde1.mockapi.io/Transaction';

export default function Header() {
  const date = new Date();
  const month = date.toLocaleString('en', { month: 'long' });
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    try {
      axios(URL).then((res) => {
        setTransaction(res.data);
      });
    } catch (error: any) {
      console.error(error.message);
    }
  }, []);

  return (
    <header className="header block">
      <div className="container">
        <div className="header__inner">
          <img className="header__avatar" src={avatar} alt="user avatar" />
          <button className="header__month secondary-btn">{month}</button>
          <img
            className="header__notification"
            src={notification}
            alt="Notification"
          />
        </div>
        <div className="header__account account">
          <h2 className="account__subtitle">Account Balance</h2>
          <h1 className="account__balance">$9400</h1>
          <div className="account__money">
            <div className="account__money-income">
              <span className="account__money-ico">
                <svg
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="income">
                    <g id="Income">
                      <path
                        id="Vector"
                        d="M19 12H5C3.67392 12 2.40215 12.5268 1.46447 13.4645C0.526784 14.4021 0 15.6739 0 17V23C0 24.3261 0.526784 25.5979 1.46447 26.5355C2.40215 27.4732 3.67392 28 5 28H19C20.3261 28 21.5979 27.4732 22.5355 26.5355C23.4732 25.5979 24 24.3261 24 23V17C24 15.6739 23.4732 14.4021 22.5355 13.4645C21.5979 12.5268 20.3261 12 19 12ZM12 24C11.2089 24 10.4355 23.7654 9.77772 23.3259C9.11992 22.8864 8.60723 22.2616 8.30448 21.5307C8.00173 20.7998 7.92252 19.9956 8.07686 19.2196C8.2312 18.4437 8.61216 17.731 9.17157 17.1716C9.73098 16.6122 10.4437 16.2312 11.2196 16.0769C11.9956 15.9225 12.7998 16.0017 13.5307 16.3045C14.2616 16.6072 14.8864 17.1199 15.3259 17.7777C15.7654 18.4355 16 19.2089 16 20C16 21.0609 15.5786 22.0783 14.8284 22.8284C14.0783 23.5786 13.0609 24 12 24Z"
                        fill="#00a86b"
                      />
                      <path
                        id="Vector_2"
                        d="M12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22Z"
                        fill="#00a86b"
                      />
                      <path
                        id="Vector_3"
                        d="M12 0C11.7348 0 11.4805 0.105357 11.2929 0.292893C11.1054 0.48043 11 0.734784 11 1V6.59L8.46003 4.05C8.26873 3.88617 8.02265 3.80057 7.77097 3.81029C7.5193 3.82001 7.28056 3.92434 7.10246 4.10244C6.92437 4.28053 6.82004 4.51927 6.81032 4.77095C6.80059 5.02262 6.8862 5.2687 7.05003 5.46L11.29 9.71C11.3822 9.79995 11.4908 9.87126 11.61 9.92C11.7334 9.97226 11.866 9.99919 12 9.99919C12.134 9.99919 12.2666 9.97226 12.39 9.92C12.5092 9.87126 12.6179 9.79995 12.71 9.71L17 5.46C17.1639 5.2687 17.2495 5.02262 17.2397 4.77095C17.23 4.51927 17.1257 4.28053 16.9476 4.10244C16.7695 3.92434 16.5308 3.82001 16.2791 3.81029C16.0274 3.80057 15.7813 3.88617 15.59 4.05L13 6.59V1C13 0.734784 12.8947 0.48043 12.7071 0.292893C12.5196 0.105357 12.2652 0 12 0Z"
                        fill="#00a86b"
                      />
                    </g>
                  </g>
                </svg>
              </span>
              <div className="account__money-content">
                <h3 className="account__money-subtitle">Income</h3>
                <h2 className="account__money-amount">
                  $
                  {transaction
                    .filter((value: TransactionType) => value.type === 'income')
                    .reduce((result: number, value: TransactionType) => {
                      return Number(result) + Number(value.amount);
                    }, 0)}
                </h2>
              </div>
            </div>
            <div className="account__money-expense">
              <span className="account__money-ico">
                <svg
                  width="24"
                  height="29"
                  viewBox="0 0 24 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="expense">
                    <g id="Expense">
                      <path
                        id="Vector"
                        d="M19 13L5 13C3.67392 13 2.40215 13.5268 1.46447 14.4645C0.526784 15.4021 0 16.6739 0 18L0 24C0 25.3261 0.526784 26.5979 1.46447 27.5355C2.40215 28.4732 3.67392 29 5 29H19C20.3261 29 21.5979 28.4732 22.5355 27.5355C23.4732 26.5979 24 25.3261 24 24V18C24 16.6739 23.4732 15.4021 22.5355 14.4645C21.5979 13.5268 20.3261 13 19 13ZM12 25C11.2089 25 10.4355 24.7654 9.77772 24.3259C9.11992 23.8864 8.60723 23.2616 8.30448 22.5307C8.00173 21.7998 7.92252 20.9956 8.07686 20.2196C8.2312 19.4437 8.61216 18.731 9.17157 18.1716C9.73098 17.6122 10.4437 17.2312 11.2196 17.0769C11.9956 16.9225 12.7998 17.0017 13.5307 17.3045C14.2616 17.6072 14.8864 18.1199 15.3259 18.7777C15.7654 19.4355 16 20.2089 16 21C16 22.0609 15.5786 23.0783 14.8284 23.8284C14.0783 24.5786 13.0609 25 12 25Z"
                        fill="#fd3c4a"
                      />
                      <path
                        id="Vector_2"
                        d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z"
                        fill="#fd3c4a"
                      />
                      <path
                        id="Vector_3"
                        d="M12.71 1.29C12.617 1.19627 12.5064 1.12188 12.3845 1.07111C12.2627 1.02034 12.132 0.994202 12 0.994202C11.868 0.994202 11.7372 1.02034 11.6154 1.07111C11.4935 1.12188 11.3829 1.19627 11.29 1.29L7.04996 5.54C6.85636 5.72698 6.74495 5.98321 6.74027 6.25232C6.73558 6.52144 6.83799 6.78139 7.02496 6.975C7.21194 7.16861 7.46817 7.28001 7.73729 7.2847C8.0064 7.28939 8.26636 7.18698 8.45996 7L11 4.41V10C11 10.2652 11.1053 10.5196 11.2929 10.7071C11.4804 10.8946 11.7347 11 12 11C12.2652 11 12.5195 10.8946 12.7071 10.7071C12.8946 10.5196 13 10.2652 13 10V4.41L15.54 7C15.7262 7.18474 15.9776 7.2889 16.24 7.29C16.3799 7.29761 16.5199 7.27573 16.6508 7.22577C16.7817 7.17581 16.9007 7.09889 17 7C17.1862 6.81264 17.2908 6.55919 17.2908 6.295C17.2908 6.03081 17.1862 5.77736 17 5.59L12.71 1.29Z"
                        fill="#fd3c4a"
                      />
                    </g>
                  </g>
                </svg>
              </span>
              <div className="account__money-content">
                <h3 className="account__money-subtitle">Expenses</h3>
                <h2 className="account__money-amount">
                  $
                  {transaction
                    .filter(
                      (value: TransactionType) => value.type === 'expense'
                    )
                    .reduce((result: number, value: TransactionType) => {
                      return Number(result) + Number(value.amount);
                    }, 0)}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
