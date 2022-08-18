import './styles.css';

export const Filters = ({ filters, filterTransactions }) => {
  return (
    <div className="filterButton">
      <button
        className="button"
        onClick={() => {
          filters.getAll();
        }}
      >
        Todos
      </button>
      <button className="button" onClick={() => filters.getEntries()}>
        Entradas
      </button>
      <button className="button" onClick={() => filters.getExits()}>
        Despesas
      </button>
    </div>
  );
};
