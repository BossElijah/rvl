import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content-wrapper">
        <div className="footer__contact-info">
          <p>+45 71 99 03 77</p>
          <a href="mailto:info@revealit.dk">info@revealit.dk</a>
        </div>
      </div>
      <a href="https://digitalist.global" className="footer__partner-container">
        <img
          src="https://1tf4c53zz50h1rzp3y2z0ejc-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Digitalist_Logotype_White-RGB-300x146.png"
          alt="Digitalist"
        />
        &nbsp;
        <span>associate</span>
      </a>
    </div>
  );
};

export default Footer;
