import React from 'react';
import Button from '../button/button';

const TeaserDeck = ({ img, title, text, buttonText, layout, buttonIcon }) => (
  <div className={`teaser-deck${layout ? ' teaser-deck--' + layout : ''}`}>
    <div className="teaser__image-container">
      <img className="teaser__image" src={img} alt={title} />
    </div>
    <div className="teaser__content">
      <h3 className="teaser__title">{title}</h3>
      <p className="teaser__text">{text}</p>
      <Button
        buttonText={buttonText}
        buttonUrl={`/${title.toLowerCase()}`}
        className="teaser__button"
        icon={buttonIcon}
      />
    </div>
  </div>
);

export default TeaserDeck;
