import React from 'react';
import SkillsSVG from '../../images/skills.svg';

const Wysiwyg = () => (
  <div className="wysiwyg">
    <h2 style={{ marginBottom: '2rem', color: 'red', fontSize: '2rem' }}>
      Warning!{' '}
      <span style={{ fontSize: '1.5rem', color: '#fff' }}>
        ( These Wysiwyg's might look a lot different when starting to use the
        right content )
      </span>
    </h2>
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
