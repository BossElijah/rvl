import React from 'react';
import Svg from '../svg/svg';
import PageTitle from '../page-title/page-title';
import Button from '../button/button';

const Hero = ({ title, titleClass, logo, logoType, logoClass, backgroundImg, text, button }) => (
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
    {logoType === 'png' ? <img src={logo} alt="" /> : <Svg type={logo} />}
      {title && <PageTitle className={titleClass ? `hero__title hero__title--${titleClass}` : 'hero__title'} title={title} />}
      {text && <p>{text}</p>}
      {button && <Button {...button}>{button.text}</Button>}
    </div>
  </section>
);

export default Hero;
