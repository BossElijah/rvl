import React from 'react';
import TextWithButton from '../text-with-button/text-with-button';

const Card = ({
  img,
  title,
  text,
  button
}) => (
  <div className="card">
    <img src={img} alt="" />
    <div className="card__content">
      <TextWithButton
        title={title}
        titleClassname="card__title"
        text={text}
        textClassname="card__text"
        button={button}
        buttonClassname="card__button"
      />
    </div>
  </div>
);

export default Card;
