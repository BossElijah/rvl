import React from 'react';
import TextAndMedia from '../text-and-media/text-and-media';
import InputField from '../input-field/input-field';
import ManSittingAtDesk from '../../images/man-sitting-desk.svg';

const ContactForm = () => (
  <div className="contact-form">
    <TextAndMedia
      title="Lad os høre fra jer"
      image={<ManSittingAtDesk />}
      text="Vi er nemme at snakke med, og vi er vant til at finde løsninger, der dækker vores kunders behov. Vi laver kun så lange aftaler, som I ønsker, så det er risikofrit at prøve os af.<br/><br/>Ring +45 71 99 03 77, eller skriv og få en snak om, hvad I har brug for."
    />
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
    <button type="button" className="button button--outline">
      Send besked
    </button>
  </div>
);

export default ContactForm;
