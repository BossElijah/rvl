import React from 'react';
import Svg from '../svg/svg';
import PageTitle from '../page-title/page-title';

const Hero = ({ title, logo, backgroundImg }) => (
  <section className="hero">
    <div
      className="hero__background-image"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    />
    <div className="hero__content-container">
      {/* <img src={logo} alt="" /> */}
      <Svg type={logo} />
      {title && <PageTitle className="hero__title" title={title} />}
    </div>
  </section>
);

export default Hero;
