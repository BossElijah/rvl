import React from 'react';

const InputField = ({ type, name, placeholder, require }) => (
  <>
  {type === "input" && <input
    type={name}
    placeholder={`${placeholder}${require ? '  *' : ''}`}
    className={`input-field input-field--${name}`}
  />}
  {type === "textarea" && <textarea
    type={name}
    placeholder={`${placeholder}${require ? '  *' : ''}`}
    className={`input-field input-field--${name}`}
  />}
  </>
);

export default InputField;
