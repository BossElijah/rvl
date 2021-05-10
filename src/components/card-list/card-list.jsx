import React from 'react';
import Card from '../card/card';

const CardList = ({ buttonLayout }) => (
  <div className="card-list">
    <Card
      img="https://editor.revealit.dk/sites/default/files/styles/scale_max_2560w/public/2019-09/businessman_drawing_a_graph.jpg?itok=Wxcb6dPp"
      title="Online-booking til hoteller"
      text="Vi har specialiseret os i at udvikle bookingløsninger til hotelbranchen, hvor vi integrerer hotellets hjemmeside og PMS."
      buttonUrl="/online-booking-system-hotel"
      buttonText="Læs mere"
      buttonLayout={buttonLayout}
    />
    <Card
      img="https://editor.revealit.dk/sites/default/files/styles/scale_max_2560w/public/2019-09/keyboard.jpeg?itok=SsBWLbij"
      title="Artikler"
      text="Læs artikler skrevet af Reveal IT's konsulenter om opgradering af Drupal, open source-bevægelsen, Drupal som headless CMS m.m."
      buttonUrl="/artikler"
      buttonText="Læs mere"
      buttonLayout={buttonLayout}
    />

    <Card
      img="https://editor.revealit.dk/sites/default/files/styles/scale_max_2560w/public/2019-08/solving_problems.png?itok=SiFso3F3"
      title="Web-konsulenter"
      text="Der er stor efterspørgsel på Drupal- og React-udviklere. Læs mere om, hvordan Reveal IT griber et konsulent-samarbejde an."
      buttonUrl="/jeres-udvidede-web-afdeling"
      buttonText="Læs mere"
      buttonLayout={buttonLayout}
    />
  </div>
);

export default CardList;
