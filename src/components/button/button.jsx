import React from 'react';

const Button = ({ buttonText, buttonUrl, icon }) => (
  <a className="button" href={buttonUrl}>
    {icon}
    {buttonText}
  </a>
);

export default Button;
