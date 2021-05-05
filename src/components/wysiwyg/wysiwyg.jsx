import React from 'react';
import SectionTitle from '../section-title/section-title';
import BulletList from '../bullet-list/bullet-list';
import SkillsSVG from '../../images/skills.svg';

const Wysiwyg = () => (
  <div className="wysiwyg">
    <SectionTitle />
    <BulletList />
    <p>
      Vi er eksperter i Drupal og React med mange års erfaring. Lej en af vores
      konsulenter – i kortere eller længere tid – og få ny inspiration eller
      blot en ekstra ressource til jeres team. <br />
      <br />
      Vores konsulenter har erfaringen til at indgå i ethvert team og bidrage
      til ethvert Drupal eller React projekt – og det er billigere end at gøre
      det selv!
    </p>
    <a className="button" href="/jeres-udvidede-web-afdeling">
      <SkillsSVG />
      Læs mere
    </a>
  </div>
);

export default Wysiwyg;
