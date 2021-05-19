import React from 'react';

// Components.
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

// SVGs.
import DrupalSVG from './images/drupal-white.svg';
import DrupalBigSVG from './images/drupal-big.svg';
import ReactSVG from './images/react.svg';
import ReactBigSVG from './images/react-big.svg';
import SkillsSVG from './images/skills.svg';
import BrainSVG from './images/brain.svg';
import TelevizionSVG from './images/televizion.svg';
import FolderSVG from './images/folder.svg';
import RvlLogoTextSVG from './images/rvl-logo-text.svg';
import DrupalThinkReactSVG from './images/drupal-think-react.svg';
import ManSittingAtDesk from './images/man-sitting-desk.svg';

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
    contactForm: ContactForm,
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
      pathname.slice(1).substring(0, pathname.length - 6).replace(/-/g, ' ');
    document.title = `${pageTitle} | Reveal IT`;
    return currentPage.decks.map((deck, index) => (
      <Deck key={index} type={deck.type} {...deck} />
    ));
  }
  return (
    <>
      <PageTitle title="404" />
      <p
        style={{
          textAlign: 'center',
          fontSize: '3rem'
        }}
      >
        Side ikke fundet
      </p>
    </>
  );
};

export default Main;
