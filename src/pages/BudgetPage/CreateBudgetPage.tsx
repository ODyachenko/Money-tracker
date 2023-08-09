import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { BeatLoader } from 'react-spinners';
import ArrowBack from '../../components/ArrowBack/ArrowBack';
import './style.scss';
import SucessPopup from '../../components/SuccessPopup/SucessPopup';

type BudgetFieldType =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLSelectElement>;

const URL: string = 'https://64c39d3067cfdca3b65ffde1.mockapi.io/Budget';
const initialState = {
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
  const [data, setData]: React.ComponentState = useState(initialState);
  const [isSend, setIsSend]: React.ComponentState = useState(false);
  const [showPopup, setShowPopup]: React.ComponentState = useState(false);

  useEffect(() => {
    if (isSend) {
      try {
        axios.post(URL, data).then(() => {
          setData(initialState);
          setIsSend(false);
          setShowPopup(true);
        });
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setTimeout(() => setShowPopup(false), 1000);
      }
    }
  }, [isSend]);

  function onChangeHandler(event: BudgetFieldType) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  const onChangeSelect = (event: SelectChangeEvent) => {
    setData({ ...data, category: event.target.value });
  };

  return (
    <section className="create-budget budget">
      <div className="container">
        <h2 className="budget__title section-title">
          <ArrowBack path="/budget" />
          Create Budget
        </h2>
        <div className="budget__content money__form">
          <h3 className="budget__subtitle money-subtitle">
            How much do you want to spend?
          </h3>
          <label className="budget__count money-count">
            $
            <input
              type="number"
              name="amount"
              value={data.amount}
              onChange={onChangeHandler}
            />
          </label>
          <div className="budget__settings settings">
            <FormControl className="field" fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                label="Category"
                value={data.category}
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
              onClick={() => setIsSend(true)}
              className="budget__btn primary-btn"
            >
              {isSend ? <BeatLoader color="#fff" /> : 'Continue'}
            </button>
          </div>
        </div>
        {showPopup && (
          <SucessPopup text="Budget has been successfully&nbsp;added" />
        )}
      </div>
    </section>
  );
}
