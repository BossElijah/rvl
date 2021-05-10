import React from 'react'
import InputField from '../input-field/input-field';

const ContactForm = () => (
    <div className="contact-form">
      <InputField type="name" placeholder="Dit fulde navn..." require />
      <InputField type="email" placeholder="Din email adresse..." require />
      <InputField type="text" placeholder="Din besked..." require />
    </div>
  )


export default ContactForm
