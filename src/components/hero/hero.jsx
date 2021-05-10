import React from 'react';

const Hero = ({ title, logo, backgroundImg }) => (
  <div className="hero">
    <div
      className="hero__background-image"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    />
    {logo}
    {title && <h1 className="hero__title">{title}</h1>}
  </div>
);

export default Hero;
