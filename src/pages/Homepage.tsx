import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTransaction } from '../redux/slices/transactionSlice';
import Header from '../components/Header/Header';
import RecentTransaction from '../components/RecentTransaction/RecentTransaction';
import Spend from '../components/Spend/Spend';

export default function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTransactionData();
  }, []);

  async function fetchTransactionData() {
    dispatch(fetchTransaction());
  }

  return (
    <>
      <Header />
      <Spend />
      <RecentTransaction />
    </>
  );
}
