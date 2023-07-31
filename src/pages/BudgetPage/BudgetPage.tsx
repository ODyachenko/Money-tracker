import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BudgetItem from '../../components/Budget/BudgetItem';
import EmptyBudget from '../../components/Budget/EmptyBudget';
import Navbar from '../../components/Navbar/Navbar';
import { setBudgetList, BudgetType } from '../../redux/slices/budgetSlice';
import './style.scss';

const URL = 'https://64c39d3067cfdca3b65ffde1.mockapi.io/Budget';

export default function BudgetPage() {
  const { budgetList } = useSelector((state: any) => state.budget);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios(URL).then((res) => dispatch(setBudgetList(res.data)));
    } catch (error: any) {
      console.error(error.message);
    }
  }, []);

  return (
    <section className="budget">
      <div className="container">
        <h2 className="budget__title section-title">Julay</h2>
        <div className="budget__settings settings">
          {budgetList.length ? (
            <ul className="budget__list">
              {budgetList.map((item: any) => {
                return <BudgetItem key={item.id} {...item} />;
              })}
            </ul>
          ) : (
            <EmptyBudget />
          )}

          <button
            onClick={() => navigate('/create-budget')}
            className="budget__btn primary-btn"
          >
            Create a budget
          </button>
        </div>
      </div>
      <Navbar />
    </section>
  );
}
