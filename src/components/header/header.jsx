import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../hamburger/hamburger';
import RvlLogoSVG from '../../images/rvl-logo.svg';

const Header = ({ showMenu, closeMenuOnClick }) => (
  <header className="header">
    <Link to="/" aria-label="Home" className="header__home">
      <RvlLogoSVG />
    </Link>
    <Hamburger
      id="hamburger-top"
      showMenu={showMenu}
      onClick={closeMenuOnClick}
    />
    <div className="header__language-container">
      <Link aria-label="View the site in English" to="/en">
        EN
      </Link>
      <Link aria-label="Se siden på Dansk" to="/">
        DA
      </Link>
    </div>
    <Hamburger
      id="hamburger-bottom"
      showMenu={showMenu}
      onClick={closeMenuOnClick}
    />
  </header>
);

export default Header;
