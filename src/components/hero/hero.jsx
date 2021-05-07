import React from 'react';

const Hero = ({ title, logo, backgroundImg }) => (
  <div className="hero">
    <div className="hero-filter">
      <img src={backgroundImg} alt="Hero" className="hero__background-image" />
    </div>
    <img className="hero__logo" src={logo} alt="Logo" />
    {title && <h1 className="hero__title">{title}</h1>}
  </div>
);

export default Hero;
