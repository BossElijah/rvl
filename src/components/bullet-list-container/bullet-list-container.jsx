import React from 'react';
import BulletList from '../bullet-list/bullet-list';

const BulletListContainer = ({ list }) => (
  <section
    className={`bullet-list-container${
      list.length > 1 ? ' bullet-list-container-2-col' : ''
    }`}
  >
    {list.map((item, index) => {
      return <BulletList key={index} item={item} />;
    })}
  </section>
);

export default BulletListContainer;
