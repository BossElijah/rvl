import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ onClick }) => {
  return (
    <div className="menu">
      <Link onClick={onClick} to="/">
        Forside
      </Link>
      <Link onClick={onClick} to="/jeres-udvidede-web-afdeling">
        Konsulenter
      </Link>
      <Link onClick={onClick} to="/drupal">
        Drupal
      </Link>
      <Link onClick={onClick} to="/react">
        React
      </Link>
      <Link onClick={onClick} to="/online-booking-system-hotel">
        Hotel-booking
      </Link>
      <Link onClick={onClick} to="/artikler">
        Artikler
      </Link>
      <Link onClick={onClick} to="/om-os">
        Om os
      </Link>
    </div>
  );
};

export default Menu;
