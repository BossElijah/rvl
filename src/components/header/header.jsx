import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../hamburger/hamburger'
import RvlLogoSVG from '../../images/rvl-logo.svg';

const Header = ({showMenu, hamburgerOnClick}) => (
  <header className="header">
    <Link to="/" aria-label="Home" className={`${showMenu ? 'visibility-hidden' : ''}`}>
      <RvlLogoSVG />
    </Link>
    <Hamburger id="hamburger-top" showMenu={showMenu} onClick={hamburgerOnClick} />
    <div className={`header__language-container${showMenu ? ' visibility-hidden' : ''}`}>
      <Link to="/en">EN</Link>
      <Link to="/">DA</Link>
    </div>
    <Hamburger id="hamburger-bottom" showMenu={showMenu} onClick={hamburgerOnClick} />
  </header>
);

export default Header;
