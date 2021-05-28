import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../icon/icon';

const Button = ({ url, className, layout, aria, icon, children }) => (
  <Link
    aria-label={aria}
    className={`button ${className ? className : ''} ${
      layout ? 'button--' + layout : ''
    }`}
    to={url}
  >
    {icon && <Icon type={icon} />}
    {children}
  </Link>
);

export default Button;
