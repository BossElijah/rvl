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
    <Hero />
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
