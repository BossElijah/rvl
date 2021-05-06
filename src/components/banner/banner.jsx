import React from 'react';
import SectionTitle from '../section-title/section-title';

const Banner = ({ title, text, person }) => (
  <div className="banner">
    <div className="banner__content">
      <SectionTitle title={title} />
      <p className="banner__text--main">{text}</p>
      <p className="banner__text--customer">{person}</p>
    </div>
  </div>
);

export default Banner;
