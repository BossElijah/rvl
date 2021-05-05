import React from 'react';
import DrupalSVG from '../../images/drupal-white.svg';

const Teaser = () => (
  <div className="teaser">
    <div className="teaser__image-container">
      <img
        className="teaser__image"
        src="https://editor.revealit.dk/sites/default/files/2019-05/druplicon-vector_0.svg"
        alt="Drupal"
      />
    </div>
    <div className="teaser__content">
      <h3 className="teaser__title">Drupal</h3>
      <p className="teaser__text">
        Verdens bedste CMS for komplekse websites. Lad os bygge noget unikt
        sammen.
      </p>
      <a href="/drupal" className="button teaser__button">
        <DrupalSVG />
        Læs mere om Drupal
      </a>
    </div>
  </div>
);

export default Teaser;
