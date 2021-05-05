import React from 'react';
import SkillsSVG from '../../images/skills.svg';

const TeaserItem = () => (
  <div className="teaser-item">
    <div className="teaser-item__title-container">
      <SkillsSVG />
      <h3 className="teaser-item__title">Faglig dygtighed</h3>
    </div>
    <p className="teaser-item__text">
      Vi leverer gennemtestet og holdbar kode, som overholder best practice og
      kodestandarder.
    </p>
  </div>
);

export default TeaserItem;
