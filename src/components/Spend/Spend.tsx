import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import IntervalsTabs from './IntervalsTabs';
import SpendChart from './SpendChart';
import './style.scss';

export default function Spend() {
  const [expenses, setExpemses] = useState(new Array(5).fill(0));
  const { transaction } = useSelector(
    (state: React.ComponentState) => state.transaction
  );

  useEffect(() => {
    const res = transaction.map((item: any) => Number(item.amount));
    // setExpemses(res);
  }, []);

  return (
    <section className="spend block">
      <div className="container">
        <h2 className="spend__title section-title">Spend Frequency</h2>
      </div>
      <div className="spend__graph">
        <SpendChart expenses={expenses} />
      </div>
      <div className="container">
        <IntervalsTabs />
      </div>
    </section>
  );
}
