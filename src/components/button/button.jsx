import React from 'react';

const Button = ({ buttonText, buttonUrl, icon, className, layout }) => (
  <a className={`button ${className + ' button--' + layout}`} href={buttonUrl}>
    {icon}
    {buttonText}
  </a>
);

export default Button;
