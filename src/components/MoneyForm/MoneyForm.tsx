import { useNavigate } from 'react-router-dom';
import './style.scss';

type MoneyType = {
  amount: number;
  category: string;
  description: string;
  date: string;
  time: string;
};

export default function MoneyForm({
  expense,
  setExpense,
  title,
}: {
  expense: MoneyType;
  setExpense: any;
  title: string;
}) {
  const navigate = useNavigate();

  function onChangeHandler(event: any) {
    setExpense({ ...expense, [event.target.name]: event.target.value });
  }

  function onClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    console.log(expense);
  }

  return (
    <form action="/" className="money__form">
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
        {title}
      </h2>
      <h3 className="money__subtitle">How much?</h3>
      <label className="money__count">
        $
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={onChangeHandler}
        />
      </label>
      <div className="money__settings">
        <select
          className="money__field money--category"
          name="category"
          value={expense.category}
          onChange={onChangeHandler}
        >
          <option>Category</option>
          <option value="Shopping">Shopping</option>
          <option value="Subscription">Subscription</option>
          <option value="Food">Food</option>
        </select>
        <input
          className="money__field money--description"
          name="description"
          value={expense.description}
          onChange={onChangeHandler}
          type="text"
          placeholder="Description"
          required
        />
        <input
          className="money__field money--date"
          type="date"
          name="date"
          value={expense.date}
          onChange={onChangeHandler}
          placeholder="Date"
          required
        />
        <input
          className="money__field money--time"
          type="time"
          name="time"
          value={expense.time}
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
    </form>
  );
}
