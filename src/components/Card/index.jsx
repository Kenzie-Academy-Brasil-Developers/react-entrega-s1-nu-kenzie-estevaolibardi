import "./style.css";
import { useState } from "react";
import trash from "./imgs/trash.png";

export const Card = ({ transaction, delFunction, prop }) => {
  return (
    <>
      {transaction.type === "Entrada" ? (
        <div className="card-container-entrada">
          <div className="card-container-sub">
            <h3 className="card-title">{transaction.description}</h3>
            <p className="card-price">
              <span>R$</span>
              {transaction.value < 0
                ? transaction.value * -1
                : transaction.value}
            </p>
            <button className="card-bttn" onClick={() => delFunction(prop)}>
              <img className="card-bttn-img" src={trash}></img>
            </button>
          </div>
          <div className="card-p-container">
            <span className="card-span">{transaction.type}</span>
          </div>
        </div>
      ) : (
        <div className="card-container">
          <div className="card-container-sub">
            <h3 className="card-title">{transaction.description}</h3>
            <p className="card-price">
              <span>R$</span>
              {transaction.value < 0
                ? transaction.value * -1
                : transaction.value}
            </p>
            <button className="card-bttn" onClick={() => delFunction(prop)}>
              <img className="card-bttn-img" src={trash}></img>
            </button>
          </div>
          <div className="card-p-container">
            <span className="card-span">{transaction.type}</span>
          </div>
        </div>
      )}
    </>
  );
};
