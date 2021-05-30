import React from 'react';
import Svg from '../svg/svg';
import SectionTitle from '../section-title/section-title';

const TextAndMedia = ({ title, image, imageType, text }) => (
  <section className="text-and-media">
    <SectionTitle title={title} />
    <div className="text-and-media__content">
    {imageType ? <img src={image} alt="" /> : <Svg type={image} />}
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  </section>
);

export default TextAndMedia;
