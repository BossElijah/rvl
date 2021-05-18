import React from 'react';
import Button from '../button/button';

const TextWithButton = ({
  title,
  titleClassname,
  text,
  textClassname,
  buttonLayout,
  buttonUrl,
  buttonText,
  buttonIcon,
  buttonAria,
  buttonClassname
}) => (
  <>
    <h3 className={titleClassname}>{title}</h3>
    <p className={textClassname}>{text}</p>
    <Button
      className={buttonClassname}
      aria={buttonAria}
      layout={buttonLayout}
      url={buttonUrl}
    >
      {buttonIcon}
      {buttonText}
    </Button>
  </>
);

export default TextWithButton;
