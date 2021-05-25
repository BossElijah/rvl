import React from 'react';
import Hero from './components/hero/hero';
import TeaserDeck from './components/teaser-deck/teaser-deck';
import PageTitle from './components/page-title/page-title';
import SectionTitle from './components/section-title/section-title';
import BulletListContainer from './components/bullet-list-container/bullet-list-container';
import Wysiwyg from './components/wysiwyg/wysiwyg';
import Banner from './components/banner/banner';
import TeaserList from './components/teaser-list/teaser-list';
import CardList from './components/card-list/card-list';
import ContactForm from './components/contact-form/contact-form';
import NotFound from './components/not-found/not-found';

const Deck = ({ type, ...props }) => {
  const deckMap = {
    hero: Hero,
    teaserDeck: TeaserDeck,
    pageTitle: PageTitle,
    sectionTitle: SectionTitle,
    bulletListContainer: BulletListContainer,
    wysiwyg: Wysiwyg,
    banner: Banner,
    teaserList: TeaserList,
    cardList: CardList,
    contactForm: ContactForm
  };

  return React.createElement(deckMap[type], props, null);
};

const pages = {
  '/': 'hjem.json',
  '/jeres-udvidede-web-afdeling': 'jeres-udvidede-web-afdeling.json'
};

const Main = ({ location }) => {
  const pathname = pages[location.pathname];
  if (pathname) {
    const currentPage = require(`./data/${pages[location.pathname]}`);
    const pageTitle =
      pathname.charAt(0).toUpperCase() +
      pathname
        .slice(1)
        .substring(0, pathname.length - 6)
        .replace(/-/g, ' ');
    document.title = `${pageTitle} | Reveal IT`;
    return (
      <main>
        {currentPage.decks.map((deck, index) => (
          <Deck key={index} type={deck.type} {...deck} />
        ))}
      </main>
    );
  }
  return <NotFound />;
};

export default Main;
