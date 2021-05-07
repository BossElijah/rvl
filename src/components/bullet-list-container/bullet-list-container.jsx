import React from 'react';
import BulletList from '../bullet-list/bullet-list';

const BulletListContainer = ({ list }) => {
  let counter = 0;
  const finalData = list.map((item, index) => {
    counter++;
    return <BulletList key={index} {...item} />;
  });
  return (
    <div
      className={`bullet-list-container${
        counter > 1 ? ' bullet-list-container-2-col' : ''
      }`}
    >
      {finalData}
    </div>
  );
};

export default BulletListContainer;
