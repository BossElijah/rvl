import React from 'react';
import TextAndMedia from '../text-and-media/text-and-media';
import InputField from '../input-field/input-field';

const ContactForm = ({ title, image, text }) => (
  <section className="contact-form">
    <TextAndMedia title={title} image={image} text={text} />
    <InputField
      name="name"
      placeholder="Dit fulde navn..."
      require
    />
    <InputField
      name="email"
      placeholder="Din email adresse..."
      require
    />
    <textarea
      name="text"
      className="input-field"
      placeholder="Din besked...  *"
    />
    <button type="submit" className="button button--outline">
      Send besked
    </button>
  </section>
);

export default ContactForm;
