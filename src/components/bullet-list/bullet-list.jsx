import React from 'react';
import BulletSVG from '../../images/bullet.svg';

const BulletList = ({one, two, three}) => (
  <ul className="bullet-list">
    <li className="bullet-list__item">
      <BulletSVG />
      <span>{one}</span>
    </li>
    <li className="bullet-list__item">
      <BulletSVG />
      <span>{two}</span>
    </li>
    <li className="bullet-list__item">
      <BulletSVG />
      <span>{three}</span>
    </li>
  </ul>
);

export default BulletList;
