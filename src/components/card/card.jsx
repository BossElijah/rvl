import React from 'react';
import TextWithButton from '../text-with-button/text-with-button';

const Card = ({
  img,
  title,
  text,
  buttonText,
  buttonUrl,
  buttonLayout,
  buttonAria
}) => (
  <div className="card">
    <img src={img} alt={title} />
    <div className="card__content">
      <TextWithButton
        title={title}
        titleClassname="card__title"
        text={text}
        textClassname="card__text"
        buttonLayout={buttonLayout}
        buttonUrl={buttonUrl}
        buttonText={buttonText}
        buttonAria={buttonAria}
        buttonClassname="card__button"
      />
    </div>
  </div>
);

export default Card;
