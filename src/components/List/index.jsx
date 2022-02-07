import "./style.css";

function List() {
  return (
    <div className="list-style">
      <p className="list-style-title">Resumo Financeiro</p>
      <div className="list-style-buttons">
        <button className="list-style-btn bt1 ">Todos</button>
        <button className="list-style-btn bt2 ">Entradas</button>
        <button className="list-style-btn bt3">Despesas</button>
      </div>
    </div>
  );
}

export default List;
