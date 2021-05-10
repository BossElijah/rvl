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
  <div className={`teaser-deck${layout ? ' teaser-deck--' + layout : ''}`}>
    <div className="teaser-deck__image-container">{img}</div>
    <div className="teaser-deck__content">
      <h2 className="teaser-deck__title">{title}</h2>
      <p className="teaser-deck__text">{text}</p>
      <Button
        buttonText={buttonText}
        buttonUrl={buttonUrl}
        className="teaser-deck__button"
        icon={buttonIcon}
        layout={buttonLayout}
      />
    </div>
  </div>
);

export default TeaserDeck;
