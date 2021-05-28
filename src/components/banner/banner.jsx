import React from 'react';
import Button from '../button/button';
import SectionTitle from '../section-title/section-title';

const Banner = ({ title, content, background, className, buttons }) => (
  <section
    style={{ background: background }}
    className={background ? `banner banner--${background}-color` : 'banner'}
  >
    <div className="banner__content">
      <SectionTitle title={title} />
      <p
        dangerouslySetInnerHTML={{ __html: content }}
        className={className ? `banner__text ${className}` : 'banner__text'}
      />
      <div className="banner__buttons-container">
      {buttons &&
        buttons.map((button, index) => (
          <Button
            key={index}
            url={button.url}
            layout={button.layout}
            aria={button.aria}
            icon={button.icon}
            type={button.type}
          >
            {button.text}
          </Button>
        ))}
    </div>
    </div>
  </section>
);

export default Banner;
