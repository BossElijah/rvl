import React from 'react';
import Button from '../button/button';

const Teaser = ({ img, title, text, buttonText, icon }) => (
  <div className="teaser">
    <div className="teaser__image-container">
      <img className="teaser__image" src={img} alt={title} />
    </div>
    <div className="teaser__content">
      <h3 className="teaser__title">{title}</h3>
      <p className="teaser__text">{text}</p>
      <Button
        className="teaser__button"
        buttonText={buttonText}
        icon={icon}
        buttonUrl={`/${title.toLowerCase()}`}
      />
    </div>
  </div>
);

export default Teaser;
