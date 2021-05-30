import React from 'react';
import { ReactComponent as Drupal } from '../../svg/drupal.svg';
import { ReactComponent as ReactLogo } from '../../svg/react.svg';
import { ReactComponent as Skills } from '../../svg/skills.svg';
import { ReactComponent as Brain } from '../../svg/brain.svg';
import { ReactComponent as Televizion } from '../../svg/tv.svg';
import { ReactComponent as Folder } from '../../svg/folder.svg';
import { ReactComponent as DrupalReact } from '../../svg/drupal-react.svg';
import { ReactComponent as Office } from '../../svg/office.svg';
import { ReactComponent as RvlText } from '../../svg/rvl-text.svg';
import { ReactComponent as Texts } from '../../svg/texts.svg';
import { ReactComponent as Phone } from '../../svg/phone.svg';
import { ReactComponent as Mail } from '../../svg/mail.svg';
import { ReactComponent as ReactText } from '../../svg/react-text.svg';
import { ReactComponent as RvlLogo } from '../../svg/rvl-logo.svg';
import { ReactComponent as DrupalUpgrade } from '../../svg/drupal-upgrade.svg';

const Svg = ({ type }) => {
  let icon;
  if (type === 'drupal') {
    icon = <Drupal />;
  } else if (type === 'react') {
    icon = <ReactLogo />;
  } else if (type === 'skills') {
    icon = <Skills />;
  } else if (type === 'brain') {
    icon = <Brain />;
  } else if (type === 'tv') {
    icon = <Televizion />;
  } else if (type === 'folder') {
    icon = <Folder />;
  } else if (type === 'drupal-react') {
    icon = <DrupalReact />;
  } else if (type === 'man-at-office') {
    icon = <Office />;
  } else if (type === 'rvl-text') {
    icon = <RvlText />;
  } else if (type === 'texts') {
    icon = <Texts />;
  } else if (type === 'phone') {
    icon = <Phone />;
  } else if (type === 'mail') {
    icon = <Mail />;
  } else if (type === 'react-text') {
    icon = <ReactText />;
  } else if (type === 'rvl-logo') {
    icon = <RvlLogo />;
  } else if (type === 'drupal-upgrade') {
    icon = <DrupalUpgrade />;
  } else {
    icon = '';
  }
  return icon;
};

export default Svg;
