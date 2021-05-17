import React from 'react';
import SectionTitle from '../section-title/section-title';

const TextAndMedia = ({ title, image, text }) => (
  <section className="text-and-media">
    <SectionTitle title={title} />
    <div className="text-and-media__content">
      {image}
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  </section>
);

export default TextAndMedia;
