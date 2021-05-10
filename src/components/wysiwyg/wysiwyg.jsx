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
  <div className={`wysiwyg${layout ? ` text-${layout}` : ''}`}>
    {title && <SectionTitle title={title} />}
    {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
    {buttonUrl && (
      <Button
        buttonUrl={buttonUrl}
        icon={buttonIcon}
        buttonText={buttonText}
        layout={buttonLayout}
        aria={buttonAria}
      />
    )}
  </div>
);

export default Wysiwyg;
