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
    <li className="recent__transaction-item">
      <span className="recent__transaction-ico">
        <img src={icon} alt="Transaction icon" />
      </span>
      <div className="recent__transaction-col">
        <h3 className="recent__transaction-caption">{caption}</h3>
        <span className="recent__transaction-description">{description}</span>
      </div>
      <div className="recent__transaction-col">
        <span className="recent__transaction-amount">{amount}</span>
        <span className="recent__transaction-time">{time}</span>
      </div>
    </li>
  );
}
