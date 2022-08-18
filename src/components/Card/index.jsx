import './style.css';
import toReal from '../../Helper';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

export const Card = ({ transaction, deleteCard, id }) => {
  return (
    <>
      <div className="cardList">
        <div
          className={transaction.type === 'Entrada' ? 'greenEntry' : 'grayExit'}
        ></div>
        <div className="leftDiv">
          <div className="description">
            <b>{transaction.description}</b>
          </div>
          <div className="type">{transaction.type}</div>
        </div>
        <div className="rightDiv">
          <div className="value">{toReal(transaction.value)}</div>
          <button className="trashBtn" onClick={() => deleteCard(id)}>
            <FaTrash />
          </button>
        </div>
      </div>
    </>
  );
};
