import React from 'react';

const InputField = ({ type, placeholder, require }) => (
  <input
    type={type}
    placeholder={`${placeholder}${require ? '  *' : ''}`}
    className={`input-field input-field--${type}`}
  />
);

export default InputField;
