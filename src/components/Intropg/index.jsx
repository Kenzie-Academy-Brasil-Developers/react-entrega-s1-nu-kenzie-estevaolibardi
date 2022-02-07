import "../Intropg/style.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import nuKenzieLogo from "./imgs/Nu Kenzie.png";
import IntroLogo from "./imgs/Group 277.svg";

function Intropg() {
  return (
    <div className="intro-style">
      <figure className="intro-figure-style">
        <img className="img-KenzieLogo2" src={nuKenzieLogo}></img>
      </figure>
      <h1 className="intro-title">Centralize o controle das suas finanças</h1>
      <span className="intro-span">de forma rápida e segura</span>
      <figure className="intro-figure-style2">
        <img className="img-logo" src={IntroLogo}></img>
      </figure>
      <Link className="link-style" to="/sd">
        <button className="intro-btn" type="button">
          Iniciar
        </button>
      </Link>
    </div>
  );
}

export default Intropg;
