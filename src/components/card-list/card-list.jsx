import React from 'react';
import Card from '../card/card';

const CardList = ({ cards }) => (
  <section className="card-list">
    {cards.map(card => (
      <Card
        key={card.id}
        img={card.img}
        title={card.title}
        text={card.text}
        buttonUrl={card.buttonUrl}
        buttonText={card.buttonText}
        buttonLayout={card.buttonLayout}
        buttonAria={card.buttonAria}
        // @todo.
        // {...card}
      />
    ))}
  </section>
);

export default CardList;
