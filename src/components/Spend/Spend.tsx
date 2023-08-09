import { useState } from 'react';
import SpendTabs from './SpendTabs';
import SpendDoughnut from './SpendDoughnut';
import './style.scss';

export type SpendCategiries = {
  names: string[];
  colors: string[];
};

const exspensesCategories: SpendCategiries = {
  names: [
    'Shopping',
    'Subscription',
    'Food',
    'Transport',
    'Gas',
    'Pet',
    'Transfer',
  ],
  colors: [
    '#fcac12',
    '#7f3dff',
    '#FD3C4A',
    '#0077FF',
    '#FCEED4',
    '#BDDCFF',
    '#0077FF',
  ],
};
const incomeCategories: SpendCategiries = {
  names: ['Salary', 'Advance'],
  colors: ['#00a86b', '#CFFAEA'],
};

export default function Spend() {
  const [activeCategory, setActiveCategory]: React.ComponentState = useState(0);

  return (
    <section className="spend">
      <div className="container">
        <h2 className="spend__title section-title">Spend Frequency</h2>
        <div className="spend__graph">
          <SpendDoughnut
            categories={activeCategory ? incomeCategories : exspensesCategories}
          />
        </div>
        <SpendTabs
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
    </section>
  );
}
