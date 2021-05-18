import React from 'react';
import TextWithButton from '../text-with-button/text-with-button';
import Button from '../button/button';

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
      {/* <h3 className="card__title">{title}</h3> */}
      {/* <p className="card__text">{text}</p> */}
      {/* <Button
        url={buttonUrl}
        className="card__button"
        layout={buttonLayout}
        aria={buttonAria}
      >
        {buttonText}
      </Button> */}
    </div>
  </div>
);

export default Card;
