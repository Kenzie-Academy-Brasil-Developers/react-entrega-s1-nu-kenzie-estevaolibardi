import "./reset.css";
import "./style.css";
import { useState } from "react";
import moneylog from "./imgs/R$.png";

export const Form = ({
  listTransactions,
  setListTransactions,
  addFunction,
}) => {
  const [input, setInput] = useState({
    description: "",
    type: "Entrada",
    value: "0",
  });

  return (
    <div className="form-style">
      <div className="description-section">
        <div className="description-span-style">
          <span className="description-span">Descrição</span>
        </div>
        <div className="input-section-style">
          <input
            className="input-section"
            value={input.description}
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(event) =>
              setInput({ ...input, description: event.target.value })
            }
          />
        </div>
        <div className="description-span-ex-style">
          <span className="description-span-ex">Ex:Compra de roupas</span>
        </div>
      </div>
      <div className="insert-section">
        <div className="insert-section-style">
          <div className="value-section">
            <span className="insert-span">Valor</span>
            <input
              className="input-insert-section"
              value={input.value}
              type="number"
              placeholder="0"
              onChange={(event) =>
                setInput({ ...input, value: event.target.value })
              }
            />
          </div>
          <div className="type-section">
            <span className="insert-span-type">Tipo de valor</span>
            <select
              className="input-insert-type-section"
              value={input.type}
              onChange={(event) =>
                setInput({ ...input, type: event.target.value })
              }
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-btn-position">
        <button onClick={() => addFunction(input)} className="form-btn">
          Inserir Valor
        </button>
      </div>
    </div>
  );
};
