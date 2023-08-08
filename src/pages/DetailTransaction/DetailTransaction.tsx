import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ArrowBack from '../../components/ArrowBack/ArrowBack';
import { BeatLoader } from 'react-spinners';
import SucessPopup from '../../components/SuccessPopup/SucessPopup';
import trash from '../../assets/img/trash.svg';
import './style.scss';

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
    <section className="detail">
      <div className={`detail__inner ${type}`}>
        <div className="container">
          <h2 className="detail__title section-title">
            <ArrowBack path="/" />
            Detail Transaction
            <img src={trash} alt="Trash" onClick={onClickRemove} />
          </h2>
          <h1 className="detail__amount">${amount}</h1>
          <h4 className="detail__time">{time}</h4>
        </div>
      </div>
      <div className="container">
        <div className="detail__reference">
          <div className="detail__label">
            Type
            <span className="detail__caption">{type}</span>
          </div>
          <div className="detail__label">
            Category
            <span className="detail__caption">{category}</span>
          </div>
          <div className="detail__label">
            Wallet
            <span className="detail__caption">Wallet</span>
          </div>
        </div>
        <h3 className="detail__subtitle">Description</h3>
        <p className="detail__description">{description}</p>
        <button
          className="detail__btn primary-btn"
          onClick={() => navigate('/edit-transaction')}
        >
          {isDelete ? <BeatLoader color="#fff" /> : 'Edit'}{' '}
        </button>
      </div>
      {showPopup && (
        <SucessPopup text="Transaction has been successfully removed" />
      )}
    </section>
  );
}
