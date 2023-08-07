import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import cross from '../../assets/img/cross.svg';
import income from '../../assets/img/income.svg';
import expense from '../../assets/img/expense.svg';
import transfer from '../../assets/img/transfer_ico.svg';

export default function CircleMenu() {
  const [isshowMenu, setIsShowMenu]: React.ComponentState = useState(false);

  return (
    <>
      <button
        className={`nav__btn ${isshowMenu ? 'active' : ''}`}
        onClick={() => setIsShowMenu(!isshowMenu)}
      >
        <img src={cross} alt="Open menu" />
      </button>
      <div
        onClick={() => setIsShowMenu(false)}
        className={`nav__actions ${isshowMenu ? 'active' : ''}`}
      >
        <NavLink to="/income" className="nav__actions-btn nav__actions--income">
          <img src={income} alt="income" />
        </NavLink>
        <NavLink
          to="/expense"
          className="nav__actions-btn nav__actions--expense"
        >
          <img src={expense} alt="expense" />
        </NavLink>
        <NavLink
          to="/transfer"
          className="nav__actions-btn nav__actions--transfer"
        >
          <img src={transfer} alt="transfer" />
        </NavLink>
      </div>
    </>
  );
}
