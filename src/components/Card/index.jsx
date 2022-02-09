import "./style.css";
import { useState } from "react";

export const Card = ({ transaction }) => {
  return (
    <div className="card-container">
      <div className="card-container-sub">
        <h3 className="card-title">{transaction.description}</h3>
        <p className="card-price">
          <span>R$</span>
          {transaction.value < 0 ? transaction.value * -1 : transaction.value}
        </p>
      </div>
      <div className="card-p-container">
        <span className="card-span">{transaction.type}</span>
      </div>
    </div>
  );
};
