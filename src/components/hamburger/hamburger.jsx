import React from 'react';
import HamburgerOpenSVG from '../../images/hamburger-open.svg.jsx';

const Hamburger = ({ onClick, showMenu }) => (
  <button className={`hamburger${showMenu ? ' menu-open' : ''}`} onClick={onClick}>
    <HamburgerOpenSVG />
  </button>
);

export default Hamburger;
