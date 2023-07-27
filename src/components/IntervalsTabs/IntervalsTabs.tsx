import { useState } from 'react';
import './style.scss';

const intervals = ['Today', 'Week', 'Month', 'Year'];

export default function IntervalsTabs() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <ul className="intervals">
      {intervals.map((interval, index) => {
        return (
          <li
            key={interval}
            className={`intervals__item ${
              activeCategory === index ? 'active' : ''
            }`}
            onClick={() => setActiveCategory(index)}
          >
            {interval}
          </li>
        );
      })}
    </ul>
  );
}
