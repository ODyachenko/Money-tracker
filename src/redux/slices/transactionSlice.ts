import { createSlice } from '@reduxjs/toolkit';

export interface TransactionType {
  id?: number;
  amount: number | string;
  category: string;
  description: string;
  date: string;
  time: string;
  type: string;
}

interface TransactionState {
  transaction: TransactionType[];
}

const initialState: TransactionState = {
  transaction: [],
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTransaction: (state, action) => {
      state.transaction = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
