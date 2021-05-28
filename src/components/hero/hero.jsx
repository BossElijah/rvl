import React from 'react';
import Svg from '../svg/svg';
import PageTitle from '../page-title/page-title';

const Hero = ({ title, logo, logoClass, backgroundImg }) => (
  <section className="hero">
    <div
      className="hero__background-image"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    />
    <div
      className={
        logoClass
          ? `hero__content-container ${logoClass}`
          : 'hero__content-container'
      }
    >
      <Svg type={logo} />
      {title && <PageTitle className="hero__title" title={title} />}
    </div>
  </section>
);

export default Hero;
