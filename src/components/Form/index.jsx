import './reset.css';
import './style.css';
import { useState } from 'react';
import moneylog from './imgs/R$.png';
import { v4 as uuidv4 } from 'uuid';

export const Form = ({
  listTransactions,
  setListTransactions,
  setFilterTransactions,
  filterTransactions,
}) => {
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  function addForm(newForm) {
    setFilterTransactions([...filterTransactions, newForm]);
    setListTransactions([...listTransactions, newForm]);
    reset();
  }
  function reset() {
    setType('');
    setDescription('');
    setValue('');
  }

  return (
    <div className="form-style">
      <div className="description-section">
        <div className="description-span-style">
          <span className="description-span">Descrição</span>
        </div>
        <div className="input-section-style">
          <input
            className="input-section"
            value={description}
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(event) => setDescription(event.target.value)}
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
              value={value}
              type="number"
              placeholder="0"
              onChange={(event) => setValue(Number(event.target.value))}
            />
          </div>
          <div className="type-section">
            <span className="insert-span-type">Tipo de valor</span>
            <select
              className="input-insert-type-section"
              value={type}
              onChange={(event) => {
                setType(event.target.value);
              }}
            >
              <option value="" defaultValue disabled hidden>
                Choose here
              </option>
              <option value="Entrada">Entrada</option>
              <option value="Saída">Despesa</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-btn-position">
        <button
          onClick={() =>
            addForm({
              id: uuidv4(),
              description,
              type,
              value: type === 'Saída' ? value * -1 : value,
            })
          }
          className="form-btn"
        >
          Inserir Valor
        </button>
      </div>
    </div>
  );
};
