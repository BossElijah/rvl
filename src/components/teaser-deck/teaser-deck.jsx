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
    <div className="teaser__image-container">{img}</div>
    <div className="teaser__content">
      <h3 className="teaser__title">{title}</h3>
      <p className="teaser__text">{text}</p>
      <Button
        buttonText={buttonText}
        buttonUrl={buttonUrl}
        className="teaser__button"
        icon={buttonIcon}
        layout={buttonLayout}
      />
    </div>
  </div>
);

export default TeaserDeck;
