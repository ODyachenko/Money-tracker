import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBack from '../../components/ArrowBack/ArrowBack';
import { setBudgetList } from '../../redux/slices/budgetSlice';
import './style.scss';

type BudgetFieldType =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>;

const URL = 'https://64c39d3067cfdca3b65ffde1.mockapi.io/Budget';
const initialState = {
  id: '',
  amount: 0,
  category: '',
};

export default function CreateBudgetPage() {
  const [fetch, setFetch] = useState(false);
  const { budgetList } = useSelector((state: any) => state.budget);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetch) {
      try {
        axios.post(URL, budgetList).then((res) => {
          dispatch(setBudgetList(initialState));
        });
      } catch (error: any) {
        console.error(error.message);
      }
    }
  }, [fetch]);

  function onChangeHandler(event: BudgetFieldType) {
    dispatch(
      setBudgetList({ ...budgetList, [event.target.name]: event.target.value })
    );
  }

  return (
    <section className="create-budget budget">
      <div className="container">
        <h2 className="budget__title section-title">
          <ArrowBack path="/budget" />
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
              value={budgetList.amount}
              onChange={onChangeHandler}
            />
          </label>
          <div className="budget__settings settings">
            <select
              className="budget__field field"
              name="category"
              value={budgetList.category}
              onChange={onChangeHandler}
            >
              <option>Category</option>
              <option value="Shopping">Shopping</option>
              <option value="Subscription">Subscription</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
            </select>
            <button
              onClick={() => setFetch(true)}
              className="budget__btn primary-btn"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
