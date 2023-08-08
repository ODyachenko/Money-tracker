import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import axios from 'axios';
import { TransactionType } from '../../redux/slices/transactionSlice';
import SucessPopup from '../SuccessPopup/SucessPopup';
import Form from './Form';
import './style.scss';

type MoneyFormType = {
  transaction: string;
  categories: string[];
};

const date = new Date();

const initalState: TransactionType = {
  amount: 0,
  category: '',
  description: '',
  date: date.toISOString().slice(0, 10),
  time: date.toTimeString().slice(0, 5),
  type: '',
};

const URL: string = 'https://64c39d3067cfdca3b65ffde1.mockapi.io';

export default function MoneyForm({ transaction, categories }: MoneyFormType) {
  const [data, setData] = useState({ ...initalState, type: transaction });
  const [isSend, setIsSend] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
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
