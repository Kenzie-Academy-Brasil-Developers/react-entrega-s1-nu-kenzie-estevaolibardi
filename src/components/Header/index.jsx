import './reset.css';
import './style.css';
import { useState } from 'react';
import nuKenzieLogo from './imgs/Nu Kenzie.png';

export const Header = ({ setIsLoggedIn }) => {
  return (
    <header className="header-style">
      <div className="header-style-wrapper">
        <div className="header-container">
          <figure className="figure-style">
            <img className="img-KenzieLogo" src={nuKenzieLogo}></img>
          </figure>
        </div>
        <div className="btn">
          <button
            className="btn-header"
            type="button"
            onClick={() => setIsLoggedIn(false)}
          >
            Inicio
          </button>
        </div>
      </div>
    </header>
  );
};
