import IntervalsTabs from './IntervalsTabs';
import SpendChart from './SpendChart';
import './style.scss';

const expenses: number[] = [20, 100, 50, 250, 15];

export default function Spend() {
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
