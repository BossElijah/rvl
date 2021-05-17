import React from 'react';

const Button = ({ buttonText, buttonUrl, icon, className, layout, aria }) => (
  <a
    aria-label={aria}
    className={`button ${className ? className : ''} ${
      layout ? 'button--' + layout : ''
    }`}
    href={buttonUrl}
  >
    {icon}
    {buttonText}
  </a>
);

export default Button;
