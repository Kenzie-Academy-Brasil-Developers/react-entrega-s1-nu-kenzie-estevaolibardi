import "./style.css";
import { useState } from "react";
import { useEffect } from "react";

export const TotalMoney = ({ listTransactions, totalValue, setTotalValue }) => {
  const total = listTransactions.reduce(
    (previousValue, currentValue) => previousValue + currentValue.value,
    0
  );

  useEffect(() => {
    setTotalValue(total);
  }, [listTransactions]);

  return (
    <div className="total-container">
      <section className="total-section">
        <span className="total-section-value">Valor Total:</span>
        <p className="total-section-price">
          <span>$</span>
          {totalValue}
        </p>
      </section>
    </div>
  );
};
