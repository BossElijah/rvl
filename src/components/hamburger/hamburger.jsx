import React from 'react';
import HamburgerSVG from '../../images/hamburger.svg.jsx';
import HamburgerCloseSVG from '../../images/hamburger-close.svg.jsx';

const Hamburger = ({ onClick, showMenu, id }) => (
  <button
    id={id}
    aria-label="Open menu"
    className="hamburger"
    onClick={onClick}
  >
    {showMenu ? <HamburgerCloseSVG /> : <HamburgerSVG />}
  </button>
);

export default Hamburger;
