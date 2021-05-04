import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          src="https://editor.revealit.dk/sites/default/files/2019-08/revealit-logo-square.svg"
          alt="Logo"
        />
      </div>
      <div className="header__language-container">
        <a href="/en">EN</a>
        <a href="/">DA</a>
      </div>
    </div>
  );
};

export default Header;
