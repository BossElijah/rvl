import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ showMenu, setShowMenu }) => (
  <div className={`menu${showMenu ? ' menu--open' : ''}`}>
    <Link
      tabindex={!showMenu && '-1'}
      onClick={() => setShowMenu(!showMenu)}
      to="/"
    >
      Forside
    </Link>
    <Link
      tabindex={!showMenu && '-1'}
      onClick={() => setShowMenu(!showMenu)}
      to="/jeres-udvidede-web-afdeling"
    >
      Konsulenter
    </Link>
    <Link
      tabindex={!showMenu && '-1'}
      onClick={() => setShowMenu(!showMenu)}
      to="/drupal"
    >
      Drupal
    </Link>
    <Link
      tabindex={!showMenu && '-1'}
      onClick={() => setShowMenu(!showMenu)}
      to="/react"
    >
      React
    </Link>
    <Link
      tabindex={!showMenu && '-1'}
      onClick={() => setShowMenu(!showMenu)}
      to="/online-booking-system-hotel"
    >
      Hotel-booking
    </Link>
    <Link
      tabindex={!showMenu && '-1'}
      onClick={() => setShowMenu(!showMenu)}
      to="/artikler"
    >
      Artikler
    </Link>
    <Link
      tabindex={!showMenu && '-1'}
      onClick={() => setShowMenu(!showMenu)}
      to="/om-os"
    >
      Om os
    </Link>
  </div>
);

export default Menu;
