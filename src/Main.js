import React from 'react';
import Hero from './components/hero/hero';
import TeaserDeck from './components/teaser-deck/teaser-deck';
import SectionTitle from './components/section-title/section-title';
import Wysiwyg from './components/wysiwyg/wysiwyg';
import Banner from './components/banner/banner';
import TeaserList from './components/teaser-list/teaser-list';
import CardList from './components/card-list/card-list';

const Main = () => (
  <>
    <Hero
      title="Drupal + React Specialister"
      logo="https://editor.revealit.dk/sites/default/files/2019-08/reveal-logo-light-blue.svg"
      backgroundImg="https://editor.revealit.dk/sites/default/files/styles/background_image_1920w/public/2019-08/background-bit-bytes-2004161-web.jpg?itok=hTmNsRrh"
    />
    <TeaserDeck />
    <TeaserDeck layout="secondary" />
    <Wysiwyg />
    <Banner />
    <SectionTitle />
    <TeaserList />
    <Wysiwyg />
    <CardList />
  </>
);

export default Main;
