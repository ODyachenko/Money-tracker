import { useSelector } from 'react-redux';
import TransactionItem from './TransactionItem';
import { TransactionType } from '../../redux/slices/transactionSlice';

export default function TransactionGroup({ title }: { title: string }) {
  const { transaction } = useSelector((state: any) => state.transaction);

  return (
    <div className="transaction__group">
      <h2 className="transaction__group-title section-title">{title}</h2>
      <ul className="transaction__group-list">
        {transaction.map((transaction: TransactionType) => {
          return <TransactionItem key={transaction.id} {...transaction} />;
        })}
      </ul>
    </div>
  );
}
