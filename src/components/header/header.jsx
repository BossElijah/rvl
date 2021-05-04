import React from 'react';
import Logo from '../logo/logo';

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <Logo />
      </a>
      <div className="header__language-container">
        <a href="/en">EN</a>
        <a href="/">DA</a>
      </div>
    </div>
  );
};

export default Header;
