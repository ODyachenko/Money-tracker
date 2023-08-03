import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { BeatLoader } from 'react-spinners';
import ArrowBack from '../../components/ArrowBack/ArrowBack';
import { setBudgetList } from '../../redux/slices/budgetSlice';
import './style.scss';

type BudgetFieldType =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>;

const URL: string = 'https://64c39d3067cfdca3b65ffde1.mockapi.io/Budget';
const initialState = {
  id: '',
  amount: 0,
  category: '',
};

const categories: string[] = [
  'Shopping',
  'Subscription',
  'Food',
  'Transport',
  'Gas',
  'Pet',
];

export default function CreateBudgetPage() {
  const [send, setSend]: React.ComponentState = useState(false);
  const { budgetList } = useSelector(
    (state: React.ComponentState) => state.budget
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (send) {
      try {
        axios.post(URL, budgetList).then(() => {
          dispatch(setBudgetList(initialState));
          setSend(false);
        });
      } catch (error: any) {
        console.error(error.message);
      }
    }
  }, [send]);

  function onChangeHandler(event: BudgetFieldType) {
    dispatch(
      setBudgetList({ ...budgetList, [event.target.name]: event.target.value })
    );
  }

  const onChangeSelect = (event: SelectChangeEvent) => {
    dispatch(
      setBudgetList({ ...budgetList, ['category']: event.target.value })
    );
  };

  return (
    <section className="create-budget budget">
      <div className="container">
        <h2 className="budget__title section-title">
          <ArrowBack path="/budget" />
          Create Budget
        </h2>
        <div className="budget__content">
          <h3 className="budget__subtitle money-subtitle">
            How much do you want to spend?
          </h3>
          <label className="budget__count money-count">
            $
            <input
              type="number"
              name="amount"
              value={budgetList.amount}
              onChange={onChangeHandler}
            />
          </label>
          <div className="budget__settings settings">
            <FormControl className="field" fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                label="Category"
                value={budgetList.category}
                onChange={onChangeSelect}
                sx={{
                  borderRadius: '12px',
                  marginBottom: '15px',
                  '& fieldset': {
                    borderColor: '#f1f1fa',
                  },
                }}
              >
                {categories.map((category) => {
                  return (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <button
              onClick={() => setSend(true)}
              className="budget__btn primary-btn"
            >
              {send ? <BeatLoader color="#fff" /> : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
