import { useState } from 'react';
import ArrowBack from '../components/ArrowBack/ArrowBack';

import MoneyForm from '../components/MoneyForm/MoneyForm';

export default function IncomePage() {
  const [data, setData] = useState({
    amount: 0,
    category: 'Category',
    description: '',
    date: '',
    time: '',
  });

  return (
    <section className="income">
      <div className="container">
        <h2 className="money__title section-title">
          <ArrowBack />
          Income
        </h2>
        <MoneyForm data={data} setData={setData} />
      </div>
    </section>
  );
}
