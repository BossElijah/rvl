import React from 'react';
import Button from '../button/button';

const Wysiwyg = ({ buttonUrl, buttonText, icon }) => {
  return (
    <div className="wysiwyg">
      <p>
        Vi er eksperter i Drupal og React med mange års erfaring. Lej en af
        vores konsulenter – i kortere eller længere tid – og få ny inspiration
        eller blot en ekstra ressource til jeres team.
      </p>
      <p>
        Vores konsulenter har erfaringen til at indgå i ethvert team og bidrage
        til ethvert Drupal eller React projekt – og det er billigere end at gøre
        det selv!
      </p>
      <Button icon={icon} buttonUrl={buttonUrl} buttonText={buttonText} />
    </div>
  );
};

export default Wysiwyg;
