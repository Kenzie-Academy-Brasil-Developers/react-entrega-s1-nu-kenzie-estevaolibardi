import './style.css';
import toReal from '../../Helper';

export const TotalMoney = ({ listTransactions }) => {
  const total = () => {
    return listTransactions.reduce(
      (totalValue, currentValue) =>
        currentValue.type === 'saída'
          ? totalValue - currentValue.value
          : totalValue + currentValue.value,
      0
    );
  };

  return (
    <div className="total-container">
      <section className="total-section">
        <div className="total-section-wrapper">
          <span className="total-section-value">Valor Total:</span>
          <p className="total-section-price">{toReal(total())}</p>
        </div>

        <p className="info">O valor se refere ao saldo</p>
      </section>
    </div>
  );
};
