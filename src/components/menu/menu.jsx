import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ closeMenuOnClick }) => {
  return (
    <div className="menu">
      <Link onClick={closeMenuOnClick} to="/">
        Forside
      </Link>
      <Link onClick={closeMenuOnClick} to="/jeres-udvidede-web-afdeling">
        Konsulenter
      </Link>
      <Link onClick={closeMenuOnClick} to="/drupal">
        Drupal
      </Link>
      <Link onClick={closeMenuOnClick} to="/react">
        React
      </Link>
      <Link onClick={closeMenuOnClick} to="/online-booking-system-hotel">
        Hotel-booking
      </Link>
      <Link onClick={closeMenuOnClick} to="/artikler">
        Artikler
      </Link>
      <Link onClick={closeMenuOnClick} to="/om-os">
        Om os
      </Link>
    </div>
  );
};

export default Menu;
