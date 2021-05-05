import React from 'react';
import Hero from './components/hero/hero';
import Teaser from './components/teaser/teaser';
import SectionTitle from './components/section-title/section-title';
import BulletList from './components/bullet-list/bullet-list';
import Wysiwyg from './components/wysiwyg/wysiwyg';
import Banner from './components/banner/banner';
import TeaserList from './components/teaser-list/teaser-list';

const Main = () => (
  <>
    <Hero />
    <Teaser />
    <Teaser />
    <SectionTitle />
    <BulletList />
    <Wysiwyg />
    <Banner />
    <SectionTitle />
    <TeaserList />
    <Wysiwyg />
  </>
);

export default Main;
