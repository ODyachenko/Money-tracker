import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import RecentTransaction from '../components/RecentTransaction/RecentTransaction';
import Spend from '../components/Spend/Spend';
import { fetchTransaction } from '../redux/slices/transactionSlice';

export default function Homepage() {
  const { transaction } = useSelector(
    (state: React.ComponentState) => state.transaction
  );
  const dispatch = useDispatch();
  const sortParam = 'time';

  useEffect(() => {
    fetchTransactionData();
  }, []);

  async function fetchTransactionData() {
    dispatch(fetchTransaction({ sortParam }));
  }

  return (
    <>
      <Header />
      {!!transaction.length && <Spend />}
      <RecentTransaction />
    </>
  );
}
