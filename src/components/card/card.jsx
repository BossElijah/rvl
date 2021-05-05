import React from 'react';

const Card = () => (
  <div className="card">
    <img
      src="https://editor.revealit.dk/sites/default/files/styles/scale_max_2560w/public/2019-09/businessman_drawing_a_graph.jpg?itok=Wxcb6dPp"
      alt="This is a card IMG"
    />

    <div className="card__content">
      <h3 className="card__title">Online-booking til hoteller</h3>
      <p className="card__text">
        Vi har specialiseret os i at udvikle bookingløsninger til hotelbranchen,
        hvor vi integrerer hotellets hjemmeside og PMS.
      </p>
      <a href="/online-booking-system-hotel" className="button card__button">
        Læs mere
      </a>
    </div>
  </div>
);

export default Card;
