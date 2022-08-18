import React from 'react';
import './styles.css';
import { Header } from '../../components/Header';
import { Form } from '../../components/Form';
import { TotalMoney } from '../../components/TotalMoney';
import { List } from '../../components/List';
import { useState } from 'react';
import { Filters } from '../../components/Filters';

const Home = ({ setIsLoggedIn }) => {
  const [listTransactions, setListTransactions] = useState([]);
  const [filterTransactions, setFilterTransactions] =
    useState(listTransactions);

  const deleteCard = (id) => {
    setListTransactions(listTransactions.filter((item) => item.id !== id));
    setFilterTransactions(filterTransactions.filter((item) => item.id !== id));
  };

  const filters = {
    getAll: () => {
      setFilterTransactions(listTransactions);
    },
    getEntries: () => {
      setFilterTransactions(
        listTransactions.filter((item) => item.type === 'Entrada')
      );
    },
    getExits: () => {
      setFilterTransactions(
        listTransactions.filter((item) => item.type === 'Saída')
      );
    },
  };

  const EmptyList = (
    <div className="emptyList">
      <div className="emptyList1"></div>
      <div className="emptyList2"></div>
    </div>
  );

  return (
    <div>
      <div className="container-pg">
        <Header setIsLoggedIn={setIsLoggedIn} />
        <div className="mainHome">
          <div className="formTotal">
            <Form
              filterTransactions={filterTransactions}
              setFilterTransactions={setFilterTransactions}
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
            {filterTransactions.length !== 0 && (
              <TotalMoney listTransactions={filterTransactions} />
            )}
          </div>
          <div className="rightBox">
            <div className="filterTitle">
              <h3 className="mainTitle">Resumo Financeiro</h3>
              <Filters
                filters={filters}
                filterTransactions={filterTransactions}
              />
            </div>
            {filterTransactions.length !== 0 ? (
              <List
                deleteCard={deleteCard}
                listTransactions={filterTransactions}
              />
            ) : (
              <div className="RightBoxList">
                <h3 className="Title">
                  Você ainda não possui nenhum lançamento
                </h3>

                {EmptyList}
                {EmptyList}
                {EmptyList}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
