import { useState } from 'react';
import MoneyForm from '../components/MoneyForm/MoneyForm';

export default function IncomePage() {
  const [expense, setExpense] = useState({
    amount: 0,
    category: 'Category',
    description: '',
    date: '',
    time: '',
  });

  return (
    <section className="income">
      <div className="container">
        <MoneyForm title="Income" expense={expense} setExpense={setExpense} />
      </div>
    </section>
  );
}
