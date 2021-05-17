import React from 'react';
import SectionTitle from '../section-title/section-title';
import Button from '../button/button';

const Wysiwyg = ({
  title,
  text,
  layout,
  buttonIcon,
  buttonUrl,
  buttonText,
  buttonLayout,
  buttonAria
}) => (
  <section className={`wysiwyg${layout ? ` text-${layout}` : ''}`}>
    {title && <SectionTitle title={title} />}
    {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
    {buttonUrl && (
      <Button url={buttonUrl} layout={buttonLayout} aria={buttonAria}>
        {buttonIcon} {buttonText}
      </Button>
    )}
  </section>
);

export default Wysiwyg;
