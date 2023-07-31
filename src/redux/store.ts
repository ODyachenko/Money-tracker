import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import budgetSlice from './slices/budgetSlice';
import transactionSlice from './slices/transactionSlice';

export const store = configureStore({
  reducer: {
    transaction: transactionSlice,
    budget: budgetSlice,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
