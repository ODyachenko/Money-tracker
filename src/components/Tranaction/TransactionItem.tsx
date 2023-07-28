import './style.scss';

type TransactionType = {
  icon: string;
  caption: string;
  description: string;
  amount: string;
  time: string;
};

export default function TransactionItem({
  icon,
  caption,
  description,
  amount,
  time,
}: TransactionType) {
  return (
    <li className="transaction__item">
      <span className="transaction__ico">
        <img src={icon} alt="Transaction icon" />
      </span>
      <div className="transaction__col">
        <h3 className="transaction__caption">{caption}</h3>
        <span className="transaction__description">{description}</span>
      </div>
      <div className="transaction__col">
        <span className="transaction__amount">{amount}</span>
        <span className="transaction__time">{time}</span>
      </div>
    </li>
  );
}
