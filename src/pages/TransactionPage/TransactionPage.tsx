import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTransaction } from '../../redux/slices/transactionSlice';
import Filters from '../../components/Filters/Filters';
import TransactionGroup from '../../components/Tranaction/TransactionGroup';
import './style.scss';

export default function TransactionPage() {
  const [showFilters, setShowFilters] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    dispatch(fetchTransaction());
  }

  return (
    <section className="transaction">
      <div className="container">
        <div className="transaction__inner">
          <span className="transaction__date secondary-btn">Month</span>
          <button
            className="transaction__filters"
            onClick={() => setShowFilters(true)}
          >
            <span className="transaction__filters-item"></span>
          </button>
        </div>
        <TransactionGroup title="Today" />
        {/* <TransactionGroup title="Yesterday" /> */}
      </div>
      <Filters showFilters={showFilters} setShowFilters={setShowFilters} />
    </section>
  );
}
