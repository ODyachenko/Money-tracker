import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import RecentTransaction from '../components/RecentTransaction/RecentTransaction';
import Spend from '../components/Spend/Spend';

export default function Homepage() {
  return (
    <>
      <Header />
      <Spend />
      <RecentTransaction />
      <Navbar />
    </>
  );
}
