import ArrowBack from '../components/ArrowBack/ArrowBack';
import MoneyForm from '../components/MoneyForm/MoneyForm';

const categories: string[] = ['Salary', 'Advance'];

export default function IncomePage() {
  return (
    <section className="income">
      <div className="container">
        <h2 className="money__title section-title">
          <ArrowBack path="/" />
          Income
        </h2>
        <MoneyForm transaction="income" categories={categories} />
      </div>
    </section>
  );
}
