import React from 'react';
import { ReactComponent as Drupal } from '../../svg/drupal.svg';
import { ReactComponent as ReactLogo } from '../../svg/react.svg';
import { ReactComponent as Skills } from '../../svg/skills.svg';
import { ReactComponent as Brain } from '../../svg/brain.svg';
import { ReactComponent as Televizion } from '../../svg/tv.svg';
import { ReactComponent as Folder } from '../../svg/folder.svg';

const Icon = ({ type }) => {
  let icon;
  if (!type) {
    icon = '';
  }
  if (type) {
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
    } else {
      icon = '';
    }
  }
  return icon;
};

export default Icon;
