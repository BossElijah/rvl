import React from 'react';
import TeaserItem from '../teaser-item/teaser-item';
import SkillsSVG from '../../images/skills.svg';
import BrainSVG from '../../images/brain.svg';
import TelevizionSVG from '../../images/televizion.svg';
import FolderSVG from '../../images/folder.svg';

const TeaserList = () => (
  <section className="teaser-list">
    <TeaserItem
      icon={<SkillsSVG />}
      title="Faglig dygtighed"
      text="Vi leverer gennemtestet og holdbar kode, som overholder best practice og kodestandarder."
    />
    <TeaserItem
      icon={<BrainSVG />}
      title="Effektivitet"
      text="Vi lever af at skabe værdi for vores kunder gennem at være effektive og løse opgaven rigtigt første gang."
    />
    <TeaserItem
      icon={<TelevizionSVG />}
      title="Styring"
      text="Lad os tage hånd om planlægning og udførelse, så jeres site bliver færdig til tiden og inden for budget."
    />
    <TeaserItem
      icon={<FolderSVG />}
      title="Fokus"
      text="Vores fokus er kun webprogrammering, og kun inden for Drupal og React. Vi gør kun det vi er bedst til."
    />
  </section>
);

export default TeaserList;
