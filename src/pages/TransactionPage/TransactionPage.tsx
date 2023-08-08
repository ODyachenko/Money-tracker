import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransaction } from '../../redux/slices/transactionSlice';
import Filters from '../../components/Filters/Filters';
import TransactionGroup from '../../components/Tranaction/TransactionGroup';
import './style.scss';
import { setIsSend } from '../../redux/slices/filterSlice';
import { month } from '../../utils/getCurrentMonth';

export default function TransactionPage() {
  const [showFilters, setShowFilters]: React.ComponentState = useState(false);
  const { sortParam, filterParam, isSend } = useSelector(
    (state: React.ComponentState) => state.filter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTransactionData();
    dispatch(setIsSend(false));
  }, [isSend]);

  async function fetchTransactionData() {
    dispatch(fetchTransaction({ sortParam, filterParam }));
  }

  return (
    <section className="transaction">
      <div className="container">
        <div className="transaction__inner">
          <span className="transaction__date secondary-btn">{month}</span>
          <button
            className="transaction__filters"
            onClick={() => setShowFilters(true)}
          >
            <span className="transaction__filters-item"></span>
          </button>
        </div>
        <TransactionGroup title="Today" />
      </div>
      <Filters showFilters={showFilters} setShowFilters={setShowFilters} />
    </section>
  );
}
