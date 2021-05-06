import React from 'react';
import SkillsSVG from '../../images/skills.svg';

const TeaserItem = ({ icon, title, text }) => (
  <div className="teaser-item">
    <div className="teaser-item__title-container">
      {icon}
      <h3 className="teaser-item__title">{title}</h3>
    </div>
    <p className="teaser-item__text">{text}</p>
  </div>
);

export default TeaserItem;
