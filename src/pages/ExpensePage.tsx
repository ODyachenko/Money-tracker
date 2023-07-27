import { useState } from 'react';
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
        <MoneyForm title="Expense" expense={expense} setExpense={setExpense} />
      </div>
    </section>
  );
}
