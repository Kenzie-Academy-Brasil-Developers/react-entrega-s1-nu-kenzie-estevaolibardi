import "./App.css";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import { List } from "./components/List";
import { useEffect, useState } from "react";
import nuKenzieLogo from "./components/Intropg/imgs/Nu Kenzie.png";
import IntroLogo from "./components/Intropg/imgs/Group 277.svg";
import "./components/Intropg/style.css";
import { Card } from "./components/Card";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [totalValue, setTotalValue] = useState(0);

  // console.log(listTransactions);

  const Login = () => {
    setIsLoggedIn(true);
  };

  const Logout = () => {
    setIsLoggedIn(false);
  };

  const addFunction = (input) => {
    typeof input.value != "NUMBER"
      ? (input.value = parseInt(input.value))
      : (input.value = input.value);
    setListTransactions([...listTransactions, input]);
  };

  const delFunction = (index) => {
    setListTransactions(
      listTransactions.filter((item, indexN) => indexN !== index)
    );
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className="container-pg">
          <Header />
          <button className="btn-header" type="button" onClick={Logout}>
            Inicio
          </button>
          <div className="main-home">
            <div className="form-total">
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                addFunction={addFunction}
              />
              <TotalMoney
                listTransactions={listTransactions}
                totalValue={totalValue}
              />
            </div>
            <div className="list">
              <List
                delFunction={delFunction}
                listTransactions={listTransactions}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="intro-style">
          <figure className="intro-figure-style">
            <img className="img-KenzieLogo2" src={nuKenzieLogo}></img>
          </figure>
          <h1 className="intro-title">
            Centralize o controle das suas finanças
          </h1>
          <span className="intro-span">de forma rápida e segura</span>
          <figure className="intro-figure-style2">
            <img className="img-logo" src={IntroLogo}></img>
          </figure>

          <button className="intro-btn" type="button" onClick={Login}>
            Iniciar
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
