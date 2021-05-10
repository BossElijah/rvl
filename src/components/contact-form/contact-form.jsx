import React from 'react';
import TextAndMedia from '../text-and-media/text-and-media';
import InputField from '../input-field/input-field';

const ContactForm = ({ title, image, text }) => (
  <div className="contact-form">
    <TextAndMedia title={title} image={image} text={text} />
    <InputField
      type="input"
      name="name"
      placeholder="Dit fulde navn..."
      require
    />
    <InputField
      type="input"
      name="email"
      placeholder="Din email adresse..."
      require
    />
    <InputField
      type="textarea"
      name="text"
      placeholder="Din besked..."
      require
    />
    <button type="submit" className="button button--outline">
      Send besked
    </button>
  </div>
);

export default ContactForm;
