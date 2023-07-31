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
  accountBalance: number;
}

const initialState: TransactionState = {
  transaction: [],
  accountBalance: 0,
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTransaction: (state, action) => {
      state.transaction = action.payload;
    },
    setAccountBalance: (state, action) => {
      state.accountBalance = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTransaction, setAccountBalance } = transactionSlice.actions;

export default transactionSlice.reducer;
