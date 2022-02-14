import "./style.css";
import { useState } from "react";
import { useEffect } from "react";

export const TotalMoney = ({ listTransactions }) => {
  const total = () => {
    return listTransactions.reduce(
      (totalValue, currentValue) =>
        currentValue.type === "Despesa"
          ? totalValue - currentValue.value
          : totalValue + currentValue.value,
      0
    );
  };

  return (
    <div className="total-container">
      <section className="total-section">
        <span className="total-section-value">Valor Total:</span>
        <p className="total-section-price">
          <span>$</span>
          {total()}
        </p>
      </section>
    </div>
  );
};
