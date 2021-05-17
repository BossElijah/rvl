import React from 'react';
import HamburgerSVG from '../../images/hamburger.svg.jsx';

const Hamburger = ({ onClick, showMenu }) => (
  <button aria-label="Open menu" className="hamburger" onClick={onClick}>
    <HamburgerSVG showMenu={showMenu} />
  </button>
);

export default Hamburger;
