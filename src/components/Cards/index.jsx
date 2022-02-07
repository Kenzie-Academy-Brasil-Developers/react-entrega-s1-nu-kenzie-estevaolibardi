import "./style.css";

function Card() {
  return (
    <div className="card-container">
      <div className="card-container-sub">
        <h3 className="card-title">Salário - Mês Dezembro</h3>
        <span className="card-price">R$6.660,00</span>
      </div>
      <div className="card-span-container">
        <span className="card-span">Entrada</span>
      </div>
    </div>
  );
}

export default Card;
