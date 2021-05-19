import React from 'react';
import TeaserItem from '../teaser-item/teaser-item';

const TeaserList = ({ teasers }) => (
  <section className="teaser-list">
    {teasers.map(item => (
      <TeaserItem key={item.id} {...item} />
    ))}
  </section>
);

export default TeaserList;
