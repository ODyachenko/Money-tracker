import ArrowBack from '../components/ArrowBack/ArrowBack';
import MoneyForm from '../components/MoneyForm/MoneyForm';

export default function ExpensePage() {
  return (
    <section className="expense">
      <div className="container">
        <h2 className="money__title section-title">
          <ArrowBack />
          Expense
        </h2>
        <MoneyForm transaction="expense" />
      </div>
    </section>
  );
}
