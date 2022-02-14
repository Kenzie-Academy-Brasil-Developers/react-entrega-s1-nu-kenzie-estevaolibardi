import "./style.css";
import { useState } from "react";
import { Card } from "../Card";

export const List = ({ listTransactions, delFunction }) => {
  return (
    <div className="list-style">
      <div className="list-container">
        <p className="list-style-title">Resumo Financeiro</p>
        <div className="list-style-buttons">
          <button className="list-style-btn bt1 ">Todos</button>
          <button className="list-style-btn bt2 ">Entradas</button>
          <button className="list-style-btn bt3">Despesas</button>
        </div>
      </div>
      {listTransactions.map((transaction, index) => {
        return (
          <Card
            transaction={transaction}
            delFunction={delFunction}
            prop={index}
            key={index}
          />
        );
      })}
    </div>
  );
};
