import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, url, icon, className, layout, aria }) => (
  <Link
    aria-label={aria}
    className={`button ${className ? className : ''} ${
      layout ? 'button--' + layout : ''
    }`}
    to={url}
  >
    {icon}
    {text}
  </Link>
);

export default Button;
