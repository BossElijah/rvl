import React from 'react';
import BulletSVG from '../bullet/bullet';

const BulletList = ({ item }) => (
  <ul className="bullet-list">
    {item.map((listItem, index) => (
      <li key={index} className="bullet-list__item">
        <BulletSVG />
        <span>{listItem.text}</span>
      </li>
    ))}
  </ul>
);

export default BulletList;
