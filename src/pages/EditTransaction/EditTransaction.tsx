import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ArrowBack from '../../components/ArrowBack/ArrowBack';
import Form from '../../components/MoneyForm/Form';
import SucessPopup from '../../components/SuccessPopup/SucessPopup';
import './style.scss';

const url: string = 'https://64c39d3067cfdca3b65ffde1.mockapi.io/Transaction';

const expenseCategories: string[] = [
  'Shopping',
  'Subscription',
  'Food',
  'Transport',
  'Gas',
  'Pet',
];
const incomeCategories: string[] = ['Salary', 'Advance'];

export default function EditTransaction() {
  const { currentTransaction } = useSelector(
    (state: React.ComponentState) => state.transaction
  );
  const [data, setData] = useState(currentTransaction);
  const [isSend, setIsSend] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSend) {
      try {
        axios.put(`${url}/${data.id}`, data).then(() => {
          setIsSend(false);
          setShowPopup(true);
        });
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setTimeout(() => {
          setShowPopup(false);
          navigate('/');
        }, 1000);
      }
    }
  }, [isSend]);

  return (
    <section className="edit">
      <div className="container">
        <h2 className="edit__title section-title">
          <ArrowBack path="/" />
          Edit Transaction
        </h2>
        <Form
          categories={
            currentTransaction.type === 'expense'
              ? expenseCategories
              : incomeCategories
          }
          data={data}
          setData={setData}
          isSend={isSend}
          setIsSend={setIsSend}
        />
        {showPopup && (
          <SucessPopup text="Transaction has been successfully&nbsp;edited" />
        )}
      </div>
    </section>
  );
}
