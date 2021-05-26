import React from 'react';
import SectionTitle from '../section-title/section-title';

const Banner = ({ title, content, background, className }) => (
  <section style={{ background: background }} className="banner">
    <div className="banner__content">
      <SectionTitle title={title} />
      <p
        dangerouslySetInnerHTML={{ __html: content }}
        className={className ? `banner__text ${className}` : 'banner__text'}
      />
    </div>
  </section>
);

export default Banner;
