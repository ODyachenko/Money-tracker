import { useSelector } from 'react-redux';
import { BudgetType } from '../../redux/slices/budgetSlice';
import { TransactionType } from '../../redux/slices/transactionSlice';

export default function BudgetItem({ amount, category }: BudgetType) {
  const { transaction } = useSelector(
    (state: React.ComponentState) => state.transaction
  );
  const result = transaction
    .filter((transaction: TransactionType) => transaction.category === category)
    .reduce((res: number, item: TransactionType) => {
      return Number(res) + Number(item.amount);
    }, 0);
  const progress: number = result / (Number(amount) / 100);
  const attentionСondition: boolean = Number(amount) - result <= 0;

  return (
    <li className="budget__list-item">
      <div className="budget__list-inner">
        <span className="budget__list-category">{category}</span>
        <svg
          className={`budget__list-attention ${
            attentionСondition ? 'show' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 0.5C9.62663 0.5 7.30655 1.20379 5.33316 2.52236C3.35977 3.84094 1.8217 5.71509 0.913451 7.9078C0.00519943 10.1005 -0.232441 12.5133 0.230582 14.8411C0.693605 17.1689 1.83649 19.3071 3.51472 20.9853C5.19295 22.6635 7.33115 23.8064 9.65892 24.2694C11.9867 24.7324 14.3995 24.4948 16.5922 23.5866C18.7849 22.6783 20.6591 21.1402 21.9776 19.1668C23.2962 17.1935 24 14.8734 24 12.5C24 9.3174 22.7357 6.26515 20.4853 4.01472C18.2348 1.76428 15.1826 0.5 12 0.5ZM11 7.5C11 7.23478 11.1054 6.98043 11.2929 6.79289C11.4804 6.60536 11.7348 6.5 12 6.5C12.2652 6.5 12.5196 6.60536 12.7071 6.79289C12.8946 6.98043 13 7.23478 13 7.5V13.5C13 13.7652 12.8946 14.0196 12.7071 14.2071C12.5196 14.3946 12.2652 14.5 12 14.5C11.7348 14.5 11.4804 14.3946 11.2929 14.2071C11.1054 14.0196 11 13.7652 11 13.5V7.5ZM12 18.5C11.8022 18.5 11.6089 18.4414 11.4444 18.3315C11.28 18.2216 11.1518 18.0654 11.0761 17.8827C11.0004 17.7 10.9806 17.4989 11.0192 17.3049C11.0578 17.1109 11.153 16.9327 11.2929 16.7929C11.4328 16.653 11.6109 16.5578 11.8049 16.5192C11.9989 16.4806 12.2 16.5004 12.3827 16.5761C12.5654 16.6518 12.7216 16.78 12.8315 16.9444C12.9414 17.1089 13 17.3022 13 17.5C13 17.7652 12.8946 18.0196 12.7071 18.2071C12.5196 18.3946 12.2652 18.5 12 18.5Z"
            fill="#FD3C4A"
          />
        </svg>
      </div>
      <h2 className="budget__list-remaining section-title">
        Remaining ${Number(amount) - result >= 0 ? Number(amount) - result : 0}
      </h2>
      <span className="budget__list-progress">
        <span
          className="budget__list-progress--item"
          style={{ width: `${progress}%` }}
        ></span>
      </span>
      <span className="budget__list-value">
        ${result} of ${amount}
      </span>
      <span
        className={`budget__list--warning ${attentionСondition ? 'show' : ''}`}
      >
        You’ve exceed the limit!
      </span>
    </li>
  );
}
