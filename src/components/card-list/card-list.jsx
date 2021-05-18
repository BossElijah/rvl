import React from 'react';
import Card from '../card/card';

const CardList = ({ buttonLayout }) => (
  <section className="card-list">
    <Card
      img={process.env.PUBLIC_URL + '/images/businessman_drawing_a_graph.jpeg'}
      title="Online-booking til hoteller"
      text="Vi har specialiseret os i at udvikle bookingløsninger til hotelbranchen, hvor vi integrerer hotellets hjemmeside og PMS."
      buttonUrl="/online-booking-system-hotel"
      buttonText="Læs mere"
      buttonLayout={buttonLayout}
      buttonAria="Læs mere om online booking til hoteller"
    />
    <Card
      img={process.env.PUBLIC_URL + '/images/keyboard.jpeg'}
      title="Artikler"
      text="Læs artikler skrevet af Reveal IT's konsulenter om opgradering af Drupal, open source-bevægelsen, Drupal som headless CMS m.m."
      buttonUrl="/artikler"
      buttonText="Læs mere"
      buttonLayout={buttonLayout}
      buttonAria="Læs mere om alle vores artikler"
    />

    <Card
      img={process.env.PUBLIC_URL + '/images/solving_problems.png'}
      title="Web-konsulenter"
      text="Der er stor efterspørgsel på Drupal- og React-udviklere. Læs mere om, hvordan Reveal IT griber et konsulent-samarbejde an."
      buttonUrl="/jeres-udvidede-web-afdeling"
      buttonText="Læs mere"
      buttonLayout={buttonLayout}
      buttonAria="Læs mere om vores web-konsulenter"
    />
  </section>
);

export default CardList;
