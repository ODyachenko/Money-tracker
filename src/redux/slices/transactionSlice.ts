import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://64c39d3067cfdca3b65ffde1.mockapi.io/Transaction?';

export const fetchTransaction: any = createAsyncThunk(
  'transaction/fetchTransaction',
  async (params: any) => {
    const { sortParam, filterParam } = params;
    const sortRule = sortParam ? `sortBy=${sortParam}` : '';
    const filterRule = filterParam ? `&type=${filterParam}` : '';

    const response = await axios(`${url}${sortRule}${filterRule}`);

    return response.data;
  }
);

export type TransactionType = {
  id?: number;
  amount: number | string;
  category: string;
  description: string;
  date: string;
  time: string;
  type: string;
};

interface TransactionState {
  transaction: TransactionType[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: TransactionState = {
  transaction: [],
  status: 'idle',
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTransaction: (state, action) => {
      state.transaction = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTransaction.pending, (state) => {
      state.status = 'pending';
      state.transaction = [];
    });
    builder.addCase(fetchTransaction.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.transaction = action.payload;
    });
    builder.addCase(fetchTransaction.rejected, (state) => {
      state.status = 'failed';
      state.transaction = [];
    });
  },
});

// Action creators are generated for each case reducer function
export const { setTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
