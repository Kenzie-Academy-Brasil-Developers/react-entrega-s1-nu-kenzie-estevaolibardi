import React from 'react';
import './styles.css';
import nuKenzieLogo from '../../assets/Nu Kenzie.png';
import IntroLogo from '../../assets/Group 277.svg';
import { useState } from 'react';

const introPage = ({ setIsLoggedIn }) => {
  return (
    <div className="wrapper">
      <div className="sub-wrapper">
        <div className="intro-style">
          <div className="text-intro">
            <figure className="intro-figure-style">
              <img className="img-KenzieLogo2" src={nuKenzieLogo}></img>
            </figure>
            <h1 className="intro-title">
              Centralize o controle das suas finanças
            </h1>
            <span className="intro-span">de forma rápida e segura</span>
            <button
              className="intro-btn"
              type="button"
              onClick={() => setIsLoggedIn(true)}
            >
              Iniciar
            </button>
          </div>
          <div className="wrapper-main-img">
            <figure className="intro-figure-style2">
              <img className="img-logo" src={IntroLogo}></img>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default introPage;
