import graph from '../../assets/img/graph.png';
import IntervalsTabs from '../IntervalsTabs/IntervalsTabs';
import './style.scss';

export default function Spend() {
  return (
    <section className="spend block">
      <div className="container">
        <h2 className="spend__title section-title">Spend Frequency</h2>
      </div>
      <div className="spend__graph">
        <img src={graph} alt="graph" />
      </div>
      <div className="container">
        <IntervalsTabs />
      </div>
    </section>
  );
}
