import ArrowBack from '../components/ArrowBack/ArrowBack';
import MoneyForm from '../components/MoneyForm/MoneyForm';
import SucessPopup from '../components/SuccessPopup/SucessPopup';

export default function IncomePage() {
  return (
    <section className="income">
      <div className="container">
        <h2 className="money__title section-title">
          <ArrowBack />
          Income
        </h2>
        <MoneyForm transaction="income" />
      </div>
      <SucessPopup />
    </section>
  );
}
