import { Link } from 'react-router-dom';
import React from 'react';
import { AppContext } from '../../App';

// styles
import './scss/styles.scss';
// styles

import logo from './../../images/logo.png';

function Header({ onClickCart, isCartOpened }) {
  const { totalPrice } = React.useContext(AppContext);

  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/">
          <img className="header__logo-img" src={logo} alt="Логотип" />
          <div className="header__logo-desc">
            <h3 className='header__logo-title'>REACT SNEAKERS</h3>
            <p className='header__logo-text'>Магазин лучших кроссовок</p>
          </div>
        </Link>
        <nav className="header__navigation header-nav">
          <ul className="header-nav__list">
            <li className="header-nav__item">
              <button className={`header-nav__button header-nav__button--cart ${isCartOpened ? 'active' : undefined}`} onClick={onClickCart}>
                <span className="header-nav__button-ico icon-cart"></span>
                <p className="header-nav__button-number">{totalPrice} руб.</p>
              </button>
            </li>
            <li className="header-nav__item">
              <Link to="/favorites">
                <button className="header-nav__button">
                  <span className="header-nav__button-ico header-nav__button-ico--favorite icon-favorite"></span>
                </button>
              </Link>
            </li>
            <li className="header-nav__item">
              <Link to="/orders">
                <button className="header-nav__button">
                  <span className="header-nav__button-ico icon-order"></span>
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;