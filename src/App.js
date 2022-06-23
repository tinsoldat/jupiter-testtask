import React from 'react';
import './App.scss';
import { ReactComponent as Logo } from './assets/logo.svg';
import { Gallery } from './features/gallery/Gallery';

function App() {

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header__items">
            <div className="header__logo">
              <div className="header__logo-image"><Logo /></div>
              <div className="header__logo-text">Agency</div>
            </div>
            <nav className="header__navbar navbar">
              <a href="/#" className="navbar__link">About</a>
              <a href="/#" className="navbar__link">Services</a>
              <a href="/#" className="navbar__link">Pricing</a>
              <a href="/#" className="navbar__link">Blog</a>
            </nav>
            <button className="header__contact">contact</button>
          </div>
        </div>
      </header>
      <section className="hero">
        <div className="container">
          <div className="hero__items">
            <div className="hero__title">Portfolio</div>
            <div className="hero__desc">
              Agency provides a full service range including&nbsp;
              technical skills, design, business understanding.
            </div>
          </div>
        </div>
      </section>
      <div className="content">
        <div className="container">
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;
