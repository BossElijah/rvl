import React from 'react';
import Button from '../button/button';

const Card = ({ img, title, text, buttonText, buttonUrl }) => (
  <div className="card">
    <img src={img} alt={title} />
    <div className="card__content">
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
      <Button
        buttonUrl={buttonUrl}
        className="card__button"
        buttonText={buttonText}
      />
    </div>
  </div>
);

export default Card;
