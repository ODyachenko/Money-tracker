import { createSlice } from '@reduxjs/toolkit';

export type BudgetType = {
  id?: string;
  amount: number | string;
  category: string;
};

interface BudgetState {
  budgetList: BudgetType;
}

const initialState: BudgetState = {
  budgetList: {
    id: '',
    amount: 0,
    category: '',
  },
};

export const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    setBudgetList: (state, action) => {
      state.budgetList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setBudgetList } = budgetSlice.actions;

export default budgetSlice.reducer;
