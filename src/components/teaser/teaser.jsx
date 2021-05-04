import React from 'react';

const Teaser = ({ img, title, text, buttonText, buttonImg }) => (
  <div className="teaser">
    <div className="teaser__image-container">
      <img className="teaser__image" src={img} alt={title} />
    </div>
    <div className="teaser__content">
      <h3 className="teaser__title">{title}</h3>
      <p className="teaser__text">{text}</p>
      <a className="button teaser__button" href={`/${title.toLowerCase()}`}>
        {buttonImg}
        {buttonText}
      </a>
    </div>
  </div>
);

export default Teaser;
