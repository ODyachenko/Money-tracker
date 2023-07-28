import { useState } from 'react';
import Filters from '../../components/Filters/Filters';
import Navbar from '../../components/Navbar/Navbar';
import TransactionGroup from '../../components/Tranaction/TransactionGroup';
import './style.scss';

export default function TransactionPage() {
  const [showFilters, setShowFilters] = useState(false);

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
        <TransactionGroup title="Yesterday" />
      </div>
      <Filters showFilters={showFilters} setShowFilters={setShowFilters} />
      <Navbar />
    </section>
  );
}
