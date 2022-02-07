import "./reset.css";
import "./style.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import nuKenzieLogo from "./imgs/Nu Kenzie.png";

function Header() {
  return (
    <header className="header-style">
      <div className="header-container">
        <figure className="figure-style">
          <img className="img-KenzieLogo" src={nuKenzieLogo}></img>
        </figure>
        <Link to="/">
          <button className="btn-header" type="button">
            Inicio
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
