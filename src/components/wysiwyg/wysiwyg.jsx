import React from 'react';
import SectionTitle from '../section-title/section-title';
import Button from '../button/button';

const Wysiwyg = ({ title, text, buttonIcon, buttonUrl, buttonText }) => (
  <div className="wysiwyg">
    {title && <SectionTitle title={title} />}
    <p dangerouslySetInnerHTML={{ __html: text }} />
    {buttonUrl && (
      <Button buttonUrl={buttonUrl} icon={buttonIcon} buttonText={buttonText} />
    )}
  </div>
);

export default Wysiwyg;
