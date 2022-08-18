import './style.css';
import { useState } from 'react';
import { Card } from '../Card';

export const List = ({ listTransactions, deleteCard }) => {
  return (
    <div className="list">
      {listTransactions.map((transaction, index) => (
        <Card
          deleteCard={deleteCard}
          transaction={transaction}
          key={index}
          id={transaction.id}
        />
      ))}
    </div>
  );
};
