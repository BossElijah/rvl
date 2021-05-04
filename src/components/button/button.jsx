import React from 'react';

const Button = ({ buttonText, buttonUrl, icon, className }) => (
  <a className={`button ${className}`} href={buttonUrl}>
    {icon}
    {buttonText}
  </a>
);

export default Button;
