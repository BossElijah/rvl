import React from 'react';
import Hero from './components/hero/hero';
import TeaserDeck from './components/teaser-deck/teaser-deck';
import PageTitle from './components/page-title/page-title';
import SectionTitle from './components/section-title/section-title';
import BulletListContainer from './components/bullet-list-container/bullet-list-container';
import Wysiwyg from './components/wysiwyg/wysiwyg';
import Banner from './components/banner/banner';
import TeaserList from './components/teaser-list/teaser-list';
import CardList from './components/card-list/card-list';
import DrupalSVG from './images/drupal-white.svg';
import DrupalBigSVG from './images/drupal-big.svg';
import ReactSVG from './images/react.svg';
import ReactBigSVG from './images/react-big.svg';
import SkillsSVG from './images/skills.svg';

const pages = {
  '/': (
    <>
      <Hero
        title="Drupal + React Specialister"
        logo="https://editor.revealit.dk/sites/default/files/2019-08/reveal-logo-light-blue.svg"
        backgroundImg="https://editor.revealit.dk/sites/default/files/styles/background_image_1920w/public/2019-08/background-bit-bytes-2004161-web.jpg?itok=hTmNsRrh"
      />
      <TeaserDeck
        img={<DrupalBigSVG />}
        title="Drupal"
        text="Verdens bedste CMS for komplekse websites. Lad os bygge noget unikt sammen."
        buttonText="Læs mere om Drupal"
        buttonIcon={<DrupalSVG />}
        buttonUrl="/drupal"
      />
      <TeaserDeck
        img={<ReactBigSVG />}
        title="React"
        text="React er det hotteste lige nu. Vær med på forkanten af fremtidens frontend-udvikling."
        buttonText="Læs mere om React"
        buttonIcon={<ReactSVG />}
        buttonUrl="/react"
        layout="secondary"
      />
      <SectionTitle title="Lej en Drupal- eller React-konsulent" />
      <BulletListContainer
        list={[
          [
            { text: 'Har I brug for ekstra ressourcer?' },
            { text: 'Mangler I kompetencer in-house?' },
            { text: 'Skal et projekt hurtigt i mål?' }
          ]
        ]}
      />
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
      <Wysiwyg
        title="Hvorfor vælge Reveal IT?"
        text="Med mere end 12 år på bagen er vi blandt de mest erfarne Drupal-konsulenter i Danmark. Vi har løst både store og små opgaver, har arbejdet for de største virksomheder og har ledet og leveret hele projekter. Nedenfor kan du læse lidt mere om, hvad der rører sig inden for Drupal og React"
        layout="center"
      />
      <CardList />{' '}
    </>
  ),
  '/jeres-udvidede-web-afdeling': (
    <>
      <Hero
        logo="https://editor.revealit.dk/sites/default/files/2019-09/drupal-react-wide3.svg"
        backgroundImg="https://editor.revealit.dk/sites/default/files/styles/background_image_1920w/public/2019-09/code-coder-codes-2194062.jpg?itok=_QgYaCOD"
      />
      <PageTitle title="Jeres udvidede web-afdeling" />
      <BulletListContainer
        list={[
          [
            { text: 'Har I brug for ekstra ressourcer?' },
            { text: 'Mangler I kompetencer in-house?' },
            { text: 'Skal et projekt hurtigt i mål?' }
          ],
          [
            { text: 'Vi laver kun Drupal og React' },
            { text: 'Vi er gode til det' },
            { text: 'Billigere end I kan gøre det selv' }
          ]
        ]}
      />
      <Wysiwyg
        title="Fleksible konsulenter der leverer varen"
        text="Alle som har arbejdet med IT kender faldgruberne: dyre, langstrakte projekter uden et klart mål i sigte, kode der ender med at skulle skrives om, ressourcer der spildes på ingenting.<br/><br/>Vi tilbyder Drupal- og React-konsulenter, som kan gå lige ind i jeres team og levere kvalitet med det samme. Vi har konsulenter på alle niveauer og inden for alle discipliner, så vi kan hjælpe med enhver Drupal- og React-opgave.<br/><br/>Vores konsulenter kan arbejde på fuld tid eller mindre, og projekterne kan have en varighed fra få uger til måneder eller flere år. Vi tilpasser os jeres behov.<br/><br/>Vores konsulenter kan indgå i store projektteams som ekstra ressourcer, som udviklere, designere eller arkitekter på alle niveauer, til en pris, der giver mere value for money end at ansætte en ekstra medarbejder selv – ikke mindst hvis der er brug for noget ekstra i en periode. Eller vi kan være jeres permanente web-udviklingsteam og sørge for det hele."
      />
      <Wysiwyg
        title="Få en bedre løsning – og spar penge samtidig!"
        text="Vi tilbyder en omkostning, som kan skaleres op og ned efter jeres behov – og som er nem at komme af med igen. I undgår tidskrævende ansættelsesprocesser, løbende uddannelse og karriereudvikling samt dyre omlægninger, når en medarbejder pludselig siger op. I fokuserer på det, som I er bedst til, og det samme gør vi – og sammen sparer vi penge.<br/><br/><ul><li>Kom hurtigt og billigt i gang – ingen lange og dyre ansættelsesprocesser.</li><li>Tænk ikke på videreuddannelse, karrieremuligheder og opsigelsesperioder – det står vi for.</li><li>Hvis en nøgleperson pludselig siger op, så har vi altid en konsulent, som hurtigt kan træde til.</li><li>Hvad enten I har brug for en React-designer, en Drupal-udvikler eller en Drupal-arkitekt, så har vi den hurtigste og mest prisfornuftige løsning.</li></ul>"
      />
      <SectionTitle title="Hvad kan vi bidrage med?" />
      <TeaserDeck
        img={<DrupalBigSVG />}
        title="Drupal-udvikling"
        text="Vi er eksperter i Drupal. Giv os en opgave, og vi løser den – seriøst."
        buttonText="Læs mere om Drupal"
        buttonIcon={<DrupalSVG />}
        buttonUrl="/drupal"
      />
      <TeaserDeck
        img={<ReactBigSVG />}
        title="React-udvikling"
        text="React er det hotte nu. Få en knivskarp og moderne frontend-løsning."
        buttonText="Læs mere om React"
        buttonIcon={<ReactSVG />}
        buttonUrl="/react"
        layout="secondary"
      />
      <Wysiwyg
        title="Nogle af vores tilfredse kunder"
        text="Reveal IT har 12 år på bagen som udbyder af avancerede web-løsninger. Vi er specialister i webudvikling med Drupal og React og har blandt andet fungeret som konsulenter, arkitekter og udviklere for: <ul><li>Webbureauer</li><li>Aviser og mediekoncerner</li><li>Mellemstore virksomheder i alle brancher</li><li>Multinationale tech-virksomheder</li><li>Ministerier og kommuner</li><li>Biblioteker</li></ul> ...og mange flere."
      />
      <Wysiwyg
        title="Hvordan gør vi det?"
        text="Vi arbejder overvejende remote. I sparer en kontorplads, og vi sparer transporten.<br/><br/>I får en dedikeret konsulent hos os, som kender jeres organisation og holder fast i opgaverne fra start til slut, herunder deadlines og timeforbrug.<br/><br/>I bestemmer, om vi afregner per time eller en fast pris per projekt/opgave – eller vi stiller en fast medarbejder til rådighed for et fast beløb per måned.<br/><br/>Vi er fleksible og tilbyder den løsning, der passer bedst til jer."
      />

      <div
        style={{
          color: 'red',
          fontSize: '2.5rem',
          textAlign: 'center',
          margin: '0 0 3rem 0'
        }}
      >
        Her kommer der en kontakt form
      </div>
    </>
  )
};

const Main = ({ location }) => {
  const pathname = pages[location.pathname];
  if (pathname) return pathname;
  return <PageTitle title="404 Page Not Found!" />;
};

export default Main;
