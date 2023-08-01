import ArrowBack from '../components/ArrowBack/ArrowBack';
import MoneyForm from '../components/MoneyForm/MoneyForm';

const categories: string[] = [
  'Shopping',
  'Subscription',
  'Food',
  'Transport',
  'Gas',
  'Pet',
];

export default function ExpensePage() {
  return (
    <section className="expense">
      <div className="container">
        <h2 className="money__title section-title">
          <ArrowBack path="/" />
          Expense
        </h2>
        <MoneyForm transaction="expense" categories={categories} />
      </div>
    </section>
  );
}
