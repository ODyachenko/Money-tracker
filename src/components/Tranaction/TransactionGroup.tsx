import { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionItem from './TransactionItem';

type TransactionType = {
  id: number;
  amount: string;
  category: string;
  description: string;
  time: string;
};

const URL =
  'https://64c39d3067cfdca3b65ffde1.mockapi.io/Transaction?sortBy=time';

export default function TransactionGroup({ title }: { title: string }) {
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    try {
      axios(URL).then((res) => setTransactionList(res.data));
    } catch (error: any) {
      console.error(error.message);
    }
  }, []);

  return (
    <div className="transaction__group">
      <h2 className="transaction__group-title section-title">{title}</h2>
      <ul className="transaction__group-list">
        {transactionList.map((transaction: TransactionType) => {
          return <TransactionItem key={transaction.id} {...transaction} />;
        })}
      </ul>
    </div>
  );
}
