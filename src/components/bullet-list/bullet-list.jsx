import React from 'react';
import BulletSVG from '../../images/bullet.svg';

const BulletList = () => (
  <ul className="bullet-list">
    <li className="bullet-list__item">
      <BulletSVG />
      <span>Har I brug for ekstra ressourcer?</span>
    </li>
    <li className="bullet-list__item">
      <BulletSVG />
      <span>Mangler I kompetencer in-house?</span>
    </li>
    <li className="bullet-list__item">
      <BulletSVG />
      <span>Skal et projekt hurtigt i mål?</span>
    </li>
  </ul>
);

export default BulletList;
