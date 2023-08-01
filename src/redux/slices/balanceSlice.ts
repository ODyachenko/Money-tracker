import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://64c39d3067cfdca3b65ffde1.mockapi.io/Balance/userBalance';

export const fetchBalance: any = createAsyncThunk(
  'balance/fetchBalance',
  async () => {
    const response = await axios(URL);

    return response.data.balance;
  }
);

interface balanceState {
  accountBalance: number;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: balanceState = {
  accountBalance: 0,
  status: 'idle',
};

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setAccountBalance: (state, action) => {
      state.accountBalance = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBalance.pending, (state) => {
      state.status = 'pending';
      state.accountBalance = 0;
    });
    builder.addCase(fetchBalance.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.accountBalance = action.payload;
    });
    builder.addCase(fetchBalance.rejected, (state) => {
      state.status = 'failed';
      state.accountBalance = 0;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setAccountBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
