import React, { useEffect, useState } from 'react';
import ArrowBack from '../../components/ArrowBack/ArrowBack';
import trash from '../../assets/img/trash.svg';
import { useSelector } from 'react-redux';
import './style.scss';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import SucessPopup from '../../components/SuccessPopup/SucessPopup';
import { useNavigate } from 'react-router-dom';

const url: string = 'https://64c39d3067cfdca3b65ffde1.mockapi.io/Transaction';

export default function DetailTransaction() {
  const { id, amount, category, description, time, type } = useSelector(
    (state: React.ComponentState) => state.transaction.currentTransaction
  );
  const [isDelete, setIsDelete]: React.ComponentState = useState(false);
  const [showPopup, setShowPopup]: React.ComponentState = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isDelete) {
      try {
        axios.delete(`${url}/${id}`).then(() => {
          setIsDelete(false);
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
  }, [isDelete]);

  function onClickRemove() {
    setIsDelete(true);
  }

  return (
    <section className="edit">
      <div className={`edit__inner ${type}`}>
        <h3 className="edit__title section-title">
          <ArrowBack path="/" />
          Detail Transaction
          <img src={trash} alt="Trash" onClick={onClickRemove} />
        </h3>
        <h2 className="edit__amount">${amount}</h2>
        <h4 className="edit__time">{time}</h4>
      </div>
      <div className="container">
        <div className="edit__reference">
          <div className="edit__label">
            Type
            <span className="edit__caption">{type}</span>
          </div>
          <div className="edit__label">
            Category
            <span className="edit__caption">{category}</span>
          </div>
          <div className="edit__label">
            Wallet
            <span className="edit__caption">Wallet</span>
          </div>
        </div>
        <h3 className="edit__subtitle">Description</h3>
        <p className="edit__description">{description}</p>
        <button className="edit__btn primary-btn">
          {isDelete ? <BeatLoader color="#fff" /> : 'Edit'}{' '}
        </button>
      </div>
      {showPopup && (
        <SucessPopup text="Transaction has been successfully removed" />
      )}
    </section>
  );
}
