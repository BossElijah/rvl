import React from 'react';
import SectionTitle from '../section-title/section-title';
import Button from '../button/button';

const Wysiwyg = ({ title, text, className, buttons }) => (
  <section className={className ? `wysiwyg ${className}` : 'wysiwyg'}>
    {title && <SectionTitle title={title} />}
    {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
    <div className="wysiwyg__buttons-container">
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
  </section>
);

export default Wysiwyg;
