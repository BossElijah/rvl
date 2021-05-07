import React from 'react';
import BulletList from '../bullet-list/bullet-list';

const BulletListList = ({ list }) => {
  const finalData = list.map((item, index) => (
    <BulletList key={index} {...item} />
  ));
  return finalData;
};

export default BulletListList;
