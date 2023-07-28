import Navbar from '../../components/Navbar/Navbar';
import TransactionGroup from '../../components/Tranaction/TransactionGroup';
import './style.scss';

export default function TransactionPage() {
  return (
    <section className="transaction">
      <div className="container">
        <div className="transaction__inner">
          <span className="transaction__date secondary-btn">Month</span>
          <button className="transaction__filters">
            <span className="transaction__filters-item"></span>
          </button>
        </div>
        <TransactionGroup title="Today" />
        <TransactionGroup title="Yesterday" />
      </div>
      <Navbar />
    </section>
  );
}
