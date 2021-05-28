import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../hamburger/hamburger';
import RvlLogoSVG from '../../images/rvl-logo.svg';

const Header = ({ showMenu, hamburgerOnClick, homeButton, languages }) => (
  <header className="header">
    <Link to={homeButton} aria-label="Home" className="header__home">
      <RvlLogoSVG />
    </Link>
    <Hamburger
      id="hamburger-top"
      showMenu={showMenu}
      onClick={hamburgerOnClick}
    />
    <div className="header__language-container">
      {languages.map(({language, text, url}, index) => {
        return (
          <Link key={index} aria-label={`View the site in ${language}`} to={url}>
            {text}
          </Link>
        );
      })}
    </div>
    <Hamburger
      id="hamburger-bottom"
      showMenu={showMenu}
      onClick={hamburgerOnClick}
    />
  </header>
);

export default Header;
