import React from 'react';

const Menu = ({ classNames }) => (
  <div className={`menu${classNames}`}>
    <a href="/">Forside</a>
    <a href="/jeres-udvidede-web-afdeling">Konsulenter</a>
    <a href="/drupal">Drupal</a>
    <a href="/react">React</a>
    <a href="/online-booking-system-hotel">Hotel-booking</a>
    <a href="/artikler">Artikler</a>
    <a href="/om-os">Om os</a>
  </div>
);

export default Menu;
