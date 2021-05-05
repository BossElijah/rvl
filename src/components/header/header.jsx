import React from 'react';
import RvlLogoSVG from '../../images/rvl-logo.svg';

const Header = () => (
  <div className="header">
    <a href="/">
      <RvlLogoSVG />
    </a>
    <div className="header__language-container">
      <a href="/en">EN</a>
      <a href="/">DA</a>
    </div>
  </div>
);

export default Header;
