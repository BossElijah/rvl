import React from 'react';
import TextWithButton from '../text-with-button/text-with-button';

const TeaserDeck = ({
  img,
  title,
  text,
  layout,
  button
}) => (
  <section className={`teaser-deck${layout ? ' teaser-deck--' + layout : ''}`}>
    <div className="teaser-deck__image-container">
      <img src={img} alt="" />
    </div>
    <div className="teaser-deck__content">
      <TextWithButton
        title={title}
        titleClassname="teaser-deck__title"
        text={text}
        textClassname="teaser-deck__text"
        button={button}
        buttonClassname="teaser-deck__button"
      />
    </div>
  </section>
);

export default TeaserDeck;
