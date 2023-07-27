import avatar from '../../assets/img/avatar.png';
import notification from '../../assets/img/notification.svg';
import income from '../../assets/img/income.svg';
import expense from '../../assets/img/expense.svg';
import './style.scss';

export default function Header() {
  return (
    <header className="header block">
      <div className="container">
        <div className="header__inner">
          <img className="header__avatar" src={avatar} alt="user avatar" />
          <button className="header__month">October</button>
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
                <img src={income} alt="Income" />
              </span>
              <div className="account__money-content">
                <h3 className="account__money-subtitle">Income</h3>
                <h2 className="account__money-amount">$5000</h2>
              </div>
            </div>
            <div className="account__money-expense">
              <span className="account__money-ico">
                <img src={expense} alt="Income" />
              </span>
              <div className="account__money-content">
                <h3 className="account__money-subtitle">Expenses</h3>
                <h2 className="account__money-amount">$1200</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
