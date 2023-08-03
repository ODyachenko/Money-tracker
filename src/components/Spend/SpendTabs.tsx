import './style.scss';

type ActiveCategory = {
  activeCategory: number;
  setActiveCategory: (value: number) => void;
};

const intervals: string[] = ['Expense', 'Income'];

export default function SpendTabs({
  activeCategory,
  setActiveCategory,
}: ActiveCategory) {
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
