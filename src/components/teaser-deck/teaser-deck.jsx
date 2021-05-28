import React from 'react';
import TextWithButton from '../text-with-button/text-with-button';

const TeaserDeck = ({
  img,
  title,
  text,
  buttonText,
  layout,
  buttonIcon,
  buttonUrl,
  buttonLayout
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
        buttonLayout={buttonLayout}
        buttonUrl={buttonUrl}
        buttonText={buttonText}
        buttonClassname="teaser-deck__button"
        buttonIcon={buttonIcon}
      />
    </div>
  </section>
);

export default TeaserDeck;
