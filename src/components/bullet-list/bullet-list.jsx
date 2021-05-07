import React from 'react';
import BulletSVG from '../../images/bullet.svg';

const BulletList = item => {
  const result = Object.keys(item).map(key => [Number(key), item[key]]);

  const finalData = result.map((listItem, index) => (
    <li key={index} className="bullet-list__item">
      <BulletSVG />
      <span>{listItem[1].text}</span>
    </li>
  ));
  return <ul className="bullet-list">{finalData}</ul>;
};

export default BulletList;
