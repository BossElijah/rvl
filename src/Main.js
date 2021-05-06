import React from 'react';
import Hero from './components/hero/hero';
import TeaserDeck from './components/teaser-deck/teaser-deck';
import SectionTitle from './components/section-title/section-title';
import BulletList from './components/bullet-list/bullet-list';
import Wysiwyg from './components/wysiwyg/wysiwyg';
import Banner from './components/banner/banner';
import TeaserList from './components/teaser-list/teaser-list';
import CardList from './components/card-list/card-list';
import DrupalSVG from './images/drupal-white.svg';
import ReactSVG from './images/react.svg';
import SkillsSVG from './images/skills.svg';

const Main = () => (
  <>
    <Hero
      title="Drupal + React Specialister"
      logo="https://editor.revealit.dk/sites/default/files/2019-08/reveal-logo-light-blue.svg"
      backgroundImg="https://editor.revealit.dk/sites/default/files/styles/background_image_1920w/public/2019-08/background-bit-bytes-2004161-web.jpg?itok=hTmNsRrh"
    />
    <TeaserDeck
      img="https://editor.revealit.dk/sites/default/files/2019-05/druplicon-vector_0.svg"
      title="Drupal"
      text="Verdens bedste CMS for komplekse websites. Lad os bygge noget unikt sammen."
      buttonText="Læs mere om Drupal"
      buttonIcon={<DrupalSVG />}
    />
    <TeaserDeck
      img="https://editor.revealit.dk/sites/default/files/2019-05/react-logo_0.svg"
      title="React"
      text="React er det hotteste lige nu. Vær med på forkanten af fremtidens frontend-udvikling."
      buttonText="Læs mere om React"
      buttonIcon={<ReactSVG />}
      layout="secondary"
    />
    <SectionTitle title="Lej en Drupal- eller React-konsulent" />
    <BulletList />
    <Wysiwyg
      text="Vi er eksperter i Drupal og React med mange års erfaring. Lej en af
        vores konsulenter – i kortere eller længere tid – og få ny inspiration
        eller blot en ekstra ressource til jeres team. <br /><br />
        Vores konsulenter har erfaringen til at indgå i ethvert team og bidrage
        til ethvert Drupal eller React projekt – og det er billigere end at gøre
        det selv!"
      buttonIcon={<SkillsSVG />}
      buttonUrl="/jeres-udvidede-web-afdeling"
      buttonText="Læs mere"
    />
    <Banner
      title="Det siger vores kunder om os"
      text="„Reveal IT's konsulent har gennem flere år hjulpet os med at implementere solide Drupal-løsninger indenfor en række komplekse forretningsområder. Vi har altid været ovenud tilfredse med samarbejdet. Vi har adgang til den absolut højeste kvalitet på Drupal-området, og vi betaler kun for den tid, som vi har brug for. Det er en model, der fungerer rigtig godt for os.”"
      person="Hjalmar Skovholm Hansen, adm. direktør, Vordingborg Køkkenet"
    />
    <SectionTitle title="Det kan vi tilføje til dit projekt" />
    <TeaserList />
    <Wysiwyg title="Hvorfor vælge Reveal IT?" text="Med mere end 12 år på bagen er vi blandt de mest erfarne Drupal-konsulenter i Danmark. Vi har løst både store og små opgaver, har arbejdet for de største virksomheder og har ledet og leveret hele projekter. Nedenfor kan du læse lidt mere om, hvad der rører sig inden for Drupal og React." />
    <CardList />
  </>
);

export default Main;
