import React from 'react';
import Hero from './components/hero/hero';
import Teaser from './components/teaser/teaser';
import SectionTitle from './components/section-title/section-title';
import BulletList from './components/bullet-list/bullet-list';
import DrupalSVG from './images/drupal-white';
import ReactSVG from './images/react';

const Main = () => (
  <>
    <Hero />
    <Teaser
      img="https://editor.revealit.dk/sites/default/files/2019-05/druplicon-vector_0.svg"
      title="Drupal"
      text="Verdens bedste CMS for komplekse websites. Lad os bygge noget unikt
        sammen."
      buttonText="Læs mere om Drupal"
      buttonImg={<DrupalSVG />}
    />
    <Teaser
      img="https://editor.revealit.dk/sites/default/files/2019-05/react-logo_0.svg"
      title="React"
      text="React er det hotteste lige nu. Vær med på forkanten af fremtidens frontend-udvikling."
      buttonText="Læs mere om React"
      buttonImg={<ReactSVG />}
    />
    <SectionTitle title="Lej en Drupal- eller React-konsulent" />
    <BulletList />
  </>
);

export default Main;