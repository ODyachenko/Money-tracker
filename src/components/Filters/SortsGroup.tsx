import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSort, setSortParam } from '../../redux/slices/filterSlice';

// const sortItems: string[] = ['Oldest', 'Newest', 'Highest', 'Lowest'];

type SortType = {
  name: string;
  value: string;
  type: string;
};

const sortItems: SortType[] = [
  {
    name: 'Oldest',
    value: 'time',
    type: 'desc',
  },
  {
    name: 'Newest',
    value: 'time',
    type: 'asc',
  },
  {
    name: 'Highest',
    value: 'amount',
    type: 'asc',
  },
  {
    name: 'Lowest',
    value: 'amount',
    type: 'desc',
  },
];

export default function SortsGroup() {
  const { activeSort } = useSelector(
    (state: React.ComponentState) => state.filter
  );
  const dispatch = useDispatch();

  function onClickFilterItem(index: number) {
    const selectedItem = sortItems[index];
    dispatch(setActiveSort(index));
    dispatch(setSortParam(`${selectedItem.value}&order=${selectedItem.type}`));
  }

  return (
    <div className="filters__group">
      <h2 className="filters__group-title section-title">Sort By</h2>
      <ul className="filters__group-list">
        {sortItems.map((item, index) => {
          return (
            <li
              key={item.name}
              className={`filters__group-item ${
                activeSort === index ? 'active' : ''
              } filters-btn`}
              onClick={() => onClickFilterItem(index)}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
