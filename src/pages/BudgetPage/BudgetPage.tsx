import { ChangeEvent, useState } from 'react';
import ArrowBack from '../../components/ArrowBack/ArrowBack';
import Navbar from '../../components/Navbar/Navbar';
import './style.scss';

type BudgetFieldType =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>;

export default function BudgetPage() {
  const [budgetData, setBudgetData] = useState({
    amount: '0',
    category: '',
  });

  function onChangeHandler(event: BudgetFieldType) {
    setBudgetData({ ...budgetData, [event.target.name]: event.target.value });
  }

  return (
    <section className="budget">
      <div className="container">
        <h2 className="budget__title section-title">
          <ArrowBack />
          Create Budget
        </h2>
        <div className="budget__content">
          <h3 className="budget__subtitle money-subtitle">
            How much do you want to spend?
          </h3>
          <label className="budget__count money-count">
            $
            <input
              type="number"
              name="amount"
              value={budgetData.amount}
              onChange={onChangeHandler}
            />
          </label>
          <div className="budget__settings settings">
            <select
              className="budget__field field"
              name="category"
              value={budgetData.category}
              onChange={onChangeHandler}
            >
              <option>Category</option>
              <option value="Shopping">Shopping</option>
              <option value="Subscription">Subscription</option>
              <option value="Food">Food</option>
            </select>
            <button className="budget__btn primary-btn">Continue</button>
          </div>
        </div>
      </div>
      {/* <Navbar /> */}
    </section>
  );
}
