import React from 'react';
import SectionTitle from '../section-title/section-title';
import Button from '../button/button';

const Wysiwyg = ({
  title,
  text,
  buttonIcon,
  buttonUrl,
  buttonText,
  layout,
  buttonLayout
}) => (
  <div className={`wysiwyg${layout ? ` text-${layout}` : ''}`}>
    {title && <SectionTitle title={title} />}
    <p dangerouslySetInnerHTML={{ __html: text }} />
    {buttonUrl && (
      <Button buttonUrl={buttonUrl} icon={buttonIcon} buttonText={buttonText} layout={buttonLayout} />
    )}
  </div>
);

export default Wysiwyg;
