import React from 'react';
import Hero from './components/hero/hero';
import Teaser from './components/teaser/teaser';
import SectionTitle from './components/section-title/section-title';
import BulletList from './components/bullet-list/bullet-list';
import Wysiwyg from './components/wysiwyg/wysiwyg';
import Banner from './components/banner/banner';
import TeaserList from './components/teaser-list/teaser-list';
import DrupalSVG from './images/drupal-white.svg';
import ReactSVG from './images/react.svg';
import SkillsSVG from './images/skills.svg';

const Main = () => (
  <>
    <Hero />
    <Teaser
      img="https://editor.revealit.dk/sites/default/files/2019-05/druplicon-vector_0.svg"
      title="Drupal"
      text="Verdens bedste CMS for komplekse websites. Lad os bygge noget unikt
        sammen."
      buttonText="Læs mere om Drupal"
      icon={<DrupalSVG />}
    />
    <Teaser
      img="https://editor.revealit.dk/sites/default/files/2019-05/react-logo_0.svg"
      title="React"
      text="React er det hotteste lige nu. Vær med på forkanten af fremtidens frontend-udvikling."
      buttonText="Læs mere om React"
      icon={<ReactSVG />}
    />
    <SectionTitle title="Lej en Drupal- eller React-konsulent" />
    <BulletList />
    <Wysiwyg
      icon={<SkillsSVG />}
      buttonUrl="/jeres-udvidede-web-afdeling"
      buttonText="Læs mere"
    />
    <Banner />
    <SectionTitle title="Det kan vi tilføje til dit projekt" />
    <TeaserList />
  </>
);

export default Main;
