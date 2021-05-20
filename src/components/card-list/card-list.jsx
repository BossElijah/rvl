import React from 'react';
import Card from '../card/card';

const CardList = ({ cards }) => (
  <section className="card-list">
    {cards.map(card => (
      <Card key={card.id} {...card} />
    ))}
  </section>
);

export default CardList;
