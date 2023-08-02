import { useDispatch } from 'react-redux';
import {
  setActiveSort,
  setActiveFilter,
  setFilterParam,
  setIsSend,
  setSortParam,
} from '../../redux/slices/filterSlice';
import FiltersGroup from './FiltersGroup';
import SortsGroup from './SortsGroup';
import './style.scss';

type stateType = {
  showFilters: boolean;
  setShowFilters: (param: boolean) => void;
};

export default function Filters({ showFilters, setShowFilters }: stateType) {
  const dispatch = useDispatch();

  function onClickReset() {
    dispatch(setFilterParam(''));
    dispatch(setSortParam(''));
    dispatch(setActiveSort(null));
    dispatch(setActiveFilter(null));
  }

  function onCLickApplyBtn() {
    dispatch(setIsSend(true));
    setShowFilters(false);
  }

  return (
    <>
      <div className={`filters ${showFilters ? 'show' : ''}`}>
        <div className="filters__inner">
          <h2 className="filters__title section-title">Filter Transaction</h2>
          <button className="filters__reset filters-btn" onClick={onClickReset}>
            Reset
          </button>
        </div>
        <FiltersGroup />
        <SortsGroup />
        <button
          className="filters__apply primary-btn"
          onClick={onCLickApplyBtn}
        >
          Apply
        </button>
      </div>
      <div onClick={() => setShowFilters(false)} className="overlay"></div>
    </>
  );
}
