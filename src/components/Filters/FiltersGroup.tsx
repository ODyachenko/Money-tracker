import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveFilter,
  setFilterParam,
} from '../../redux/slices/filterSlice';

const filterItems: string[] = ['Expense', 'Income', 'Transfer'];

export default function FiltersGroup() {
  const { activeFilter } = useSelector(
    (state: React.ComponentState) => state.filter
  );
  const dispatch = useDispatch();

  function onClickFilterItem(index: number) {
    dispatch(setActiveFilter(index));
    dispatch(setFilterParam(filterItems[index].toLowerCase()));
  }

  return (
    <div className="filters__group">
      <h2 className="filters__group-title section-title">Filter By</h2>
      <ul className="filters__group-list">
        {filterItems.map((item, index) => {
          return (
            <li
              key={item}
              className={`filters__group-item ${
                activeFilter === index ? 'active' : ''
              } filters-btn`}
              onClick={() => onClickFilterItem(index)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
