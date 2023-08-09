import { useDispatch } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import {
  setCurrentTransaction,
  TransactionType,
} from '../../redux/slices/transactionSlice';
import './style.scss';

export default function TransactionItem({
  id,
  amount,
  category,
  description,
  date,
  time,
  type,
}: TransactionType) {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch();

  function onClickHandler() {
    navigate('/detail-transaction');
    dispatch(
      setCurrentTransaction({
        id,
        amount,
        category,
        description,
        date,
        time,
        type,
      })
    );
  }

  return (
    <li className="transaction__item" onClick={onClickHandler}>
      <span className="transaction__ico">
        <img src={`img/${category}.svg`} alt="Transaction icon" />
      </span>
      <div className="transaction__col">
        <h3 className="transaction__caption">{category}</h3>
        <span className="transaction__description">{description}</span>
      </div>
      <div className="transaction__col">
        <span
          className={`transaction__amount ${
            type === 'income' ? 'income' : 'expense'
          }`}
        >
          ${amount}
        </span>
        <span className="transaction__time">{time}</span>
      </div>
    </li>
  );
}
