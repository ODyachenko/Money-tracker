import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { TransactionType } from '../../redux/slices/transactionSlice';
import SucessPopup from '../SuccessPopup/SucessPopup';
import Form from './Form';
import './style.scss';
import { currentDate, currentTime } from '../../utils/getCurrentDate';

type MoneyFormType = {
  transaction: string;
  categories: string[];
};

const initalState: TransactionType = {
  amount: 0,
  category: '',
  description: '',
  date: currentDate,
  time: currentTime,
  type: '',
};

const URL: string = 'https://64c39d3067cfdca3b65ffde1.mockapi.io';

export default function MoneyForm({ transaction, categories }: MoneyFormType) {
  const [data, setData]: React.ComponentState = useState({
    ...initalState,
    type: transaction,
  });
  const [isSend, setIsSend]: React.ComponentState = useState(false);
  const [showPopup, setShowPopup]: React.ComponentState = useState(false);
  const { accountBalance } = useSelector(
    (state: React.ComponentState) => state.balance
  );

  useEffect(() => {
    if (isSend) {
      postTransactionData();
      changeBalance();
    }
  }, [data, isSend]);

  async function postTransactionData() {
    try {
      await axios.post(`${URL}/Transaction`, data).then(() => {
        setData({ ...initalState, type: transaction });
        setIsSend(false);
        setShowPopup(true);
      });
    } catch (error: any) {
      console.error('Error:', error.message);
    } finally {
      setTimeout(() => setShowPopup(false), 1000);
    }
  }

  async function changeBalance() {
    if (data.type === 'income') {
      try {
        await axios.put(
          'https://64c39d3067cfdca3b65ffde1.mockapi.io/Balance/userBalance',
          {
            balance: String(Number(accountBalance) + Number(data.amount)),
          }
        );
      } catch (error: any) {
        console.error(error.message);
      }
    } else {
      try {
        await axios.put(
          'https://64c39d3067cfdca3b65ffde1.mockapi.io/Balance/userBalance',
          {
            balance: String(Number(accountBalance) - Number(data.amount)),
          }
        );
      } catch (error: any) {
        console.log(error.message);
      }
    }
  }

  return (
    <>
      <Form
        categories={categories}
        data={data}
        setData={setData}
        isSend={isSend}
        setIsSend={setIsSend}
      />
      {showPopup && (
        <SucessPopup text="Transaction has been successfully&nbsp;added" />
      )}
    </>
  );
}
