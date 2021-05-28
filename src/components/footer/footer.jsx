import React from 'react';

const Footer = ({ phone, mail, associate: {logo, text, url} }) => (
  <footer className="footer">
    <div className="footer__content-wrapper">
      <div className="footer__contact-info">
        <p>{phone}</p>
        <a href={`mailto:${mail}`}>{mail}</a>
      </div>
    </div>
    <a href={url} className="footer__partner-container">
      <img
        src={logo}
        alt=""
      />
      &nbsp;
      <span>{text}</span>
    </a>
  </footer>
);

export default Footer;
