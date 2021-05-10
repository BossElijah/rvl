import React from 'react'
import InputField from '../input-field/input-field';

const ContactForm = () => (
    <div className="contact-form">
      <InputField type="input" name="name" placeholder="Dit fulde navn..." require />
      <InputField type="input" name="email" placeholder="Din email adresse..." require />
      <InputField type="textarea" name="text" placeholder="Din besked..." require />
      <button type="button" className="button button--outline">Send besked</button>
    </div>
  )


export default ContactForm
