import React from 'react';
import TextAndMedia from '../text-and-media/text-and-media';
import InputField from '../input-field/input-field';

const ContactForm = props => (
  <section className="contact-form">
    <form>
      <TextAndMedia {...props} />
      <InputField name="name" placeholder="Dit fulde navn..." require />
      <InputField name="email" placeholder="Din email adresse..." require />
      <textarea
        name="text"
        className="input-field"
        placeholder="Din besked...  *"
      />
      <input
        type="submit"
        className="button button--outline"
        value="Send besked"
      />
    </form>
  </section>
);

export default ContactForm;
