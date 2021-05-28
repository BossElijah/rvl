import React from 'react';
import Svg from '../svg/svg';

const TeaserItem = ({ icon, title, text }) => (
  <div className="teaser-item">
    <div className="teaser-item__title-container">
      <Svg type={icon} />
      <h3 className="teaser-item__title">{title}</h3>
    </div>
    <p className="teaser-item__text">{text}</p>
  </div>
);

export default TeaserItem;
