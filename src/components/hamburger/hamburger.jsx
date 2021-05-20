import React from 'react';
import HamburgerSVG from '../../images/hamburger.svg.jsx';

const Hamburger = ({ onClick, showMenu, id }) => (
  <button id={id} aria-label="Open menu" className={`hamburger${showMenu ? ' menu--open' : ''}`} onClick={onClick}>
    <HamburgerSVG showMenu={showMenu} />
  </button>
);

export default Hamburger;
