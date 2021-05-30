import React from 'react';
import Button from '../button/button';

const TextWithButton = ({
  title,
  titleClassname,
  text,
  textClassname,
  button,
  buttonClassname
}) => (
  <>
    <h2 className={titleClassname}>{title}</h2>
    <p className={textClassname}>{text}</p>
    <Button className={buttonClassname} {...button}>
      {button.text}
    </Button>
  </>
);

export default TextWithButton;
