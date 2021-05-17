import React from 'react';

const Hero = ({ title, logo, backgroundImg }) => (
  <section className="hero">
    <div
      className="hero__background-image"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    />
    {logo}
    {title && <h1 className="hero__title">{title}</h1>}
  </section>
);

export default Hero;
