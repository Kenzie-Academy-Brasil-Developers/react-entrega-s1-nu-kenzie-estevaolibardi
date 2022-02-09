import "./reset.css";
import "./style.css";
import { useState } from "react";
import nuKenzieLogo from "./imgs/Nu Kenzie.png";

export const Header = () => {
  return (
    <header className="header-style">
      <div className="header-container">
        <figure className="figure-style">
          <img className="img-KenzieLogo" src={nuKenzieLogo}></img>
        </figure>
      </div>
    </header>
  );
};
