import React from 'react';

const Footer = ({ showMenu }) => (
  <footer className={`footer${showMenu ? ' visibility-hidden' : ''}`}>
    <div className="footer__content-wrapper">
      <div className="footer__contact-info">
        <p>+45 71 99 03 77</p>
        <a href="mailto:info@revealit.dk">info@revealit.dk</a>
      </div>
    </div>
    <a href="https://digitalist.global" className="footer__partner-container">
      <img
        src={process.env.PUBLIC_URL + '/images/digitalist_logo.png'}
        alt=""
      />
      &nbsp;
      <span>associate</span>
    </a>
  </footer>
);

export default Footer;
