import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ onClick, links }) => (
  <div className="menu">
    {links.map(({ url, text }, index) => (
      <Link key={index} onClick={onClick} to={url}>
        {text}
      </Link>
    ))}
  </div>
);

export default Menu;
