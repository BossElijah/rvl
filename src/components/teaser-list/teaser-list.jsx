import React from 'react';
import TeaserItem from '../teaser-item/teaser-item';

const TeaserList = ({ teasers }) => (
  <section className="teaser-list">
    {teasers.map(({ icon, title, text, id }) => (
      <TeaserItem key={id} icon={icon} title={title} text={text} />
    ))}
  </section>
);

export default TeaserList;
