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
  '/': 'home.json',
  '/jeres-udvidede-web-afdeling': 'consultants.json',
  '/drupal': 'drupal.json',
  '/react': 'react.json',
  '/online-booking-system-hotel': 'hotels.json',
  '/artikler': 'articles.json',
  '/om-os': 'about-us.json',
  '/opgradering-af-drupal': 'upgrade-drupal-article.json',
  '/open-source': 'open-source-article.json',
  '/drupal-fremtiden-er-headless': 'drupal-headless-article.json'
};

const Main = ({ location }) => {
  const pathname = pages[location.pathname];

  if (pathname) {
    const currentPage = require(`./data/${pages[location.pathname]}`);
    document.title = currentPage.title;

    return (
      <main role="main">
        {currentPage.decks.map((deck, index) => (
          <Deck key={index} type={deck.type} {...deck} />
        ))}
      </main>
    );
  } else {
    document.title = '404 - Page Not Found';
    return (
      <main role="main">
        <NotFound />
      </main>
    );
  }
};

export default Main;
