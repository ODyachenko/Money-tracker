import FiltersGroup from './FiltersGroup';
import './style.scss';

type stateType = {
  showFilters: boolean;
  setShowFilters: (param: boolean) => void;
};

const filterItems: string[] = ['Expense', 'Income', 'Transfer'];
const SortItems: string[] = ['Oldest', 'Newest', 'Highest', 'Lowest'];

export default function Filters({ showFilters, setShowFilters }: stateType) {
  return (
    <>
      <div className={`filters ${showFilters ? 'show' : ''}`}>
        <div className="filters__inner">
          <h2 className="filters__title section-title">Filter Transaction</h2>
          <button className="filters__reset filters-btn">Reset</button>
        </div>
        <FiltersGroup title="Filter By" items={filterItems} />
        <FiltersGroup title="Sort By" items={SortItems} />
        <button
          className="filters__apply primary-btn"
          onClick={() => setShowFilters(false)}
        >
          Apply
        </button>
      </div>
      <div className="overlay"></div>
    </>
  );
}
