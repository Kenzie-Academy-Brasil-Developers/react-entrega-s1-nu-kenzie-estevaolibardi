import "./reset.css";
import "./style.css";
import moneylog from "./imgs/R$.png";

function Form() {
  return (
    <div className="form-style">
      <div className="description-section">
        <div className="description-span-style">
          <span className="description-span">Descrição</span>
        </div>
        <div className="input-section-style">
          <input
            className="input-section"
            type="text"
            placeholder="Digite aqui sua descrição"
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
              type="text"
              placeholder="1"
            />
          </div>
          <div className="type-section">
            <span className="insert-span-type">Tipo de valor</span>
            <select className="input-insert-type-section">
              <option value="tomato">Entrada</option>
              <option value="tomato">Despesa</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-btn-position">
        <button className="form-btn">Inserir Valor</button>
      </div>
    </div>
  );
}

export default Form;
