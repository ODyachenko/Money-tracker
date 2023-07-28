import { useState } from 'react';
import ArrowBack from '../components/ArrowBack/ArrowBack';
import MoneyForm from '../components/MoneyForm/MoneyForm';

export default function ExpensePage() {
  const [expense, setExpense] = useState({
    amount: 0,
    category: 'Category',
    description: '',
    date: '',
    time: '',
  });

  return (
    <section className="expense">
      <div className="container">
        <h2 className="money__title section-title">
          <ArrowBack />
          Expense
        </h2>
        <MoneyForm data={expense} setData={setExpense} />
      </div>
    </section>
  );
}
