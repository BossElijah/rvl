import React from 'react';
import { Link } from 'react-router-dom';
import Svg from '../svg/svg';

const Button = ({ url, className, layout, aria, icon, children }) => (
  <Link
    aria-label={aria}
    className={`button ${className ? className : ''} ${
      layout ? 'button--' + layout : ''
    }`}
    to={url}
  >
    {icon && <Svg type={icon} />}
    {children}
  </Link>
);

export default Button;
