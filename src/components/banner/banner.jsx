import React from 'react';
import SectionTitle from '../section-title/section-title';

const Banner = () => (
  <div className="banner">
    <div className="banner__content">
      <SectionTitle />
      <p className="banner__text--main">
        „Reveal IT's konsulent har gennem flere år hjulpet os med at
        implementere solide Drupal-løsninger indenfor en række komplekse
        forretningsområder. Vi har altid været ovenud tilfredse med samarbejdet.
        Vi har adgang til den absolut højeste kvalitet på Drupal-området, og vi
        betaler kun for den tid, som vi har brug for. Det er en model, der
        fungerer rigtig godt for os.”
      </p>
      <p className="banner__text--customer">
        Hjalmar Skovholm Hansen, adm. direktør, Vordingborg Køkkenet
      </p>
    </div>
  </div>
);

export default Banner;
