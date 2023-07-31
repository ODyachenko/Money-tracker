import { useState } from 'react';

type FilterType = {
  title: string;
  items: string[];
};

export default function FiltersGroup({ title, items }: FilterType) {
  const [activeItem, setActiveItem]: any = useState(null);

  return (
    <div className="filters__group">
      <h2 className="filters__group-title section-title">{title}</h2>
      <ul className="filters__group-list">
        {items.map((item, index) => {
          return (
            <li
              key={item}
              className={`filters__group-item ${
                activeItem === index ? 'active' : ''
              } filters-btn`}
              onClick={() => setActiveItem(index)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
