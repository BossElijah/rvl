import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, url, icon, className, layout, aria, children }) => (
  <Link
    aria-label={aria}
    className={`button ${className ? className : ''} ${
      layout ? 'button--' + layout : ''
    }`}
    to={url}
  >
    {children}
  </Link>
);

export default Button;
