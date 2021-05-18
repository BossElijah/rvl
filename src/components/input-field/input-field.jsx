import React from 'react';

const InputField = ({ name, placeholder, require }) => (
  <>
      <input
        type={name}
        placeholder={`${placeholder}${require ? '  *' : ''}`}
        className={`input-field input-field--${name}`}
      />
  </>
);

export default InputField;
