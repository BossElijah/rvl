import React from 'react';
import HamburgerSVG from '../../images/hamburger.svg.jsx';

const Hamburger = ({ onClick, showMenu }) => (
  <button
    className={`hamburger${showMenu ? ' menu-open' : ''}`}
    onClick={onClick}
  >
    <HamburgerSVG showMenu={showMenu} />
  </button>
);

export default Hamburger;
