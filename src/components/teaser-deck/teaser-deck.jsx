import React from 'react';
import Button from '../button/button';

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
    <div className="teaser-deck__image-container">{img}</div>
    <div className="teaser-deck__content">
      <h2 className="teaser-deck__title">{title}</h2>
      <p className="teaser-deck__text">{text}</p>
      <Button
        url={buttonUrl}
        className="teaser-deck__button"
        layout={buttonLayout}
      >
        {buttonIcon} {buttonText}
      </Button>
    </div>
  </section>
);

export default TeaserDeck;
