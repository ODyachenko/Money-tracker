import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import transactionSlice from './slices/transactionSlice';

export const store = configureStore({
  reducer: {
    transaction: transactionSlice,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
