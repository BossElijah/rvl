import React from 'react';

const Hero = () => (
  <div className="hero">
    <div className="hero-filter">
      <img src="https://editor.revealit.dk/sites/default/files/styles/background_image_1920w/public/2019-08/background-bit-bytes-2004161-web.jpg?itok=hTmNsRrh" alt="Hero" className="hero__background-image" />
    </div>
    <img
      className="hero__logo"
      src="https://editor.revealit.dk/sites/default/files/2019-08/reveal-logo-light-blue.svg"
      alt="Logo with text"
    />
    <h1 className="hero__title">Drupal + React Specialister</h1>
  </div>
);

export default Hero;
