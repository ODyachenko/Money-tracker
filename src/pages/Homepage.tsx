import Header from '../components/Header/Header';
import RecentTransaction from '../components/RecentTransaction/RecentTransaction';
import Spend from '../components/Spend/Spend';

export default function Homepage() {
  return (
    <>
      <Header />
      <Spend />
      <RecentTransaction />
    </>
  );
}
