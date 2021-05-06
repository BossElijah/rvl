import React from 'react';
import HamburgerSVG from '../../images/hamburger.svg.jsx';

const root = document.querySelector('#root').classList;
  const toggleMenu = () => {
    if (!root.contains('menu-open')) {
      root.add('menu-open');
    } else {
      root.remove('menu-open');
    }
  };

const Hamburger = () => (
  <button className="hamburger" onClick={toggleMenu}>
    <HamburgerSVG />
  </button>
);

export default Hamburger;
