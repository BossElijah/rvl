import React from 'react';
import Hero from './components/hero/hero';
import Teaser from './components/teaser/teaser';
import SectionTitle from './components/section-title/section-title';
import BulletList from './components/bullet-list/bullet-list';
import Wysiwyg from './components/wysiwyg/wysiwyg';
import Banner from './components/banner/banner';
import DrupalSVG from './images/drupal-white';
import ReactSVG from './images/react';
import SkillsSVG from './images/skills';

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
  </>
);

export default Main;
