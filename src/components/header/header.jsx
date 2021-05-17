import React from 'react';
import { Link } from 'react-router-dom';
import RvlLogoSVG from '../../images/rvl-logo.svg';

const Header = () => (
  <section className="header">
    <Link to="/" aria-label="Home">
      <RvlLogoSVG />
    </Link>
    <div className="header__language-container">
      <Link to="/en">EN</Link>
      <Link to="/">DA</Link>
    </div>
  </section>
);

export default Header;
