import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import balanceSlice from './slices/balanceSlice';
import budgetSlice from './slices/budgetSlice';
import filterSlice from './slices/filterSlice';
import transactionSlice from './slices/transactionSlice';

export const store = configureStore({
  reducer: {
    transaction: transactionSlice,
    budget: budgetSlice,
    balance: balanceSlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
