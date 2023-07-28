import shoppingBag from '../../assets/img/shopping_bag.svg';
import subscription from '../../assets/img/recurring_bill.svg';
import food from '../../assets/img/restaurant.svg';

import './style.scss';

type TransactionType = {
  amount: string;
  category: string;
  description: string;
  time: string;
};

export default function TransactionItem({
  amount,
  category,
  description,
  time,
}: TransactionType) {
  return (
    <li className="transaction__item">
      <span className="transaction__ico">
        <img
          src={require(`../../assets/img/${category}.svg`)}
          alt="Transaction icon"
        />
      </span>
      <div className="transaction__col">
        <h3 className="transaction__caption">{category}</h3>
        <span className="transaction__description">{description}</span>
      </div>
      <div className="transaction__col">
        <span className="transaction__amount">${amount}</span>
        <span className="transaction__time">{time}</span>
      </div>
    </li>
  );
}
