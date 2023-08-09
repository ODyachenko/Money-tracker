import { TransactionType } from '../redux/slices/transactionSlice';

export const getAmount = (transaction: TransactionType[], type: string) => {
  return transaction
    .filter((value: TransactionType) => value.type === type)
    .reduce((result: number, value: TransactionType) => {
      return Number(result) + Number(value.amount);
    }, 0);
};
