import React from 'react';
import SectionTitle from '../section-title/section-title';

const Banner = ({ title, content, background, layout }) => (
  <section style={{ background: background }} className="banner">
    <div className="banner__content">
      <SectionTitle title={title} />
      <p
        dangerouslySetInnerHTML={{ __html: content }}
        className={`banner__text${layout ? ' text--' + layout : ''}`}
      />
    </div>
  </section>
);

export default Banner;
