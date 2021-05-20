import React from 'react';

// Components.
import Hero from './components/hero/hero';
import TeaserDeck from './components/teaser-deck/teaser-deck';
import PageTitle from './components/page-title/page-title';
import SectionTitle from './components/section-title/section-title';
import BulletListContainer from './components/bullet-list-container/bullet-list-container';
import Wysiwyg from './components/wysiwyg/wysiwyg';
import Banner from './components/banner/banner';
import TeaserList from './components/teaser-list/teaser-list';
import CardList from './components/card-list/card-list';
import ContactForm from './components/contact-form/contact-form';
import NotFound from './components/not-found/not-found';

// SVGs.
import DrupalSVG from './images/drupal-white.svg';
import DrupalBigSVG from './images/drupal-big.svg';
import ReactSVG from './images/react.svg';
import ReactBigSVG from './images/react-big.svg';
import SkillsSVG from './images/skills.svg';
import BrainSVG from './images/brain.svg';
import TelevizionSVG from './images/televizion.svg';
import FolderSVG from './images/folder.svg';
import RvlLogoTextSVG from './images/rvl-logo-text.svg';
import DrupalThinkReactSVG from './images/drupal-think-react.svg';
import ManSittingAtDesk from './images/man-sitting-desk.svg';

const pages = {
  '/': (
    <>
      <Hero
        title="Drupal + React Specialister"
        logo={<RvlLogoTextSVG />}
        backgroundImg={
          process.env.PUBLIC_URL +
          '/images/background-bit-bytes-2004161-web.jpeg'
        }
      />
      <TeaserDeck
        img={<DrupalBigSVG />}
        title="Drupal"
        text="Verdens bedste CMS for komplekse websites. Lad os bygge noget unikt sammen."
        buttonText="Læs mere om Drupal"
        buttonIcon={<DrupalSVG />}
        buttonUrl="/drupal"
        buttonLayout="primary"
      />
      <TeaserDeck
        img={<ReactBigSVG />}
        title="React"
        text="React er det hotteste lige nu. Vær med på forkanten af fremtidens frontend-udvikling."
        buttonText="Læs mere om React"
        buttonIcon={<ReactSVG />}
        buttonUrl="/react"
        layout="secondary"
        buttonLayout="secondary"
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
        buttonLayout="outline"
        buttonAria="Læs mere om vores konsulenter"
      />
      <Banner
        title="Det siger vores kunder om os"
        content="„Reveal IT's konsulent har gennem flere år hjulpet os med at implementere solide Drupal-løsninger indenfor en række komplekse forretningsområder. Vi har altid været ovenud tilfredse med samarbejdet. Vi har adgang til den absolut højeste kvalitet på Drupal-området, og vi betaler kun for den tid, som vi har brug for. Det er en model, der fungerer rigtig godt for os.”<span style='display: block; margin-top: 1rem; font-style: normal;font-weight: 400;'>Hjalmar Skovholm Hansen, adm. direktør, Vordingborg Køkkenet</span>"
        layout="italic"
      />
      <SectionTitle title="Det kan vi tilføje til dit projekt" />
      <TeaserList
        teasers={[
          {
            id: 1,
            icon: <SkillsSVG />,
            title: 'Faglig dygtighed',
            text:
              'Vi leverer gennemtestet og holdbar kode, som overholder best practice og kodestandarder.'
          },
          {
            id: 2,
            icon: <BrainSVG />,
            title: 'Effektivitet',
            text:
              'Vi lever af at skabe værdi for vores kunder gennem at være effektive og løse opgaven rigtigt første gang.'
          },
          {
            id: 3,
            icon: <TelevizionSVG />,
            title: 'Styring',
            text:
              'Lad os tage hånd om planlægning og udførelse, så jeres site bliver færdig til tiden og inden for budget.'
          },
          {
            id: 4,
            icon: <FolderSVG />,
            title: 'Fokus',
            text:
              'Vores fokus er kun webprogrammering, og kun inden for Drupal og React. Vi gør kun det vi er bedst til.'
          }
        ]}
      />
      <Wysiwyg
        title="Hvorfor vælge Reveal IT?"
        text="Med mere end 12 år på bagen er vi blandt de mest erfarne Drupal-konsulenter i Danmark. Vi har løst både store og små opgaver, har arbejdet for de største virksomheder og har ledet og leveret hele projekter. Nedenfor kan du læse lidt mere om, hvad der rører sig inden for Drupal og React"
        layout="center"
      />
      <CardList
        cards={[
          {
            id: 1,
            img:
              process.env.PUBLIC_URL +
              '/images/businessman_drawing_a_graph.jpeg',
            title: 'Online-booking til hoteller',
            text:
              'Vi har specialiseret os i at udvikle bookingløsninger til hotelbranchen, hvor vi integrerer hotellets hjemmeside og PMS.',
            buttonUrl: '/online-booking-system-hotel',
            buttonText: 'Læs mere',
            buttonLayout: 'outline',
            buttonAria: 'Læs mere om online booking til hoteller'
          },
          {
            id: 2,
            img: process.env.PUBLIC_URL + '/images/keyboard.jpeg',
            title: 'Artikler',
            text:
              "Læs artikler skrevet af Reveal IT's konsulenter om opgradering af Drupal, open source-bevægelsen, Drupal som headless CMS m.m.",
            buttonUrl: '/artikler',
            buttonText: 'Læs mere',
            buttonLayout: 'outline',
            buttonAria: 'Læs mere om alle vores artikler'
          },
          {
            id: 3,
            img: process.env.PUBLIC_URL + '/images/solving_problems.png',
            title: 'Web-konsulenter',
            text:
              'Der er stor efterspørgsel på Drupal- og React-udviklere. Læs mere om, hvordan Reveal IT griber et konsulent-samarbejde an.',
            buttonUrl: '/jeres-udvidede-web-afdeling',
            buttonText: 'Læs mere',
            buttonLayout: 'outline',
            buttonAria: 'Læs mere om vores web-konsulenter'
          }
        ]}
      />
    </>
  ),
  '/jeres-udvidede-web-afdeling': (
    <>
      <Hero
        logo={<DrupalThinkReactSVG />}
        backgroundImg={
          process.env.PUBLIC_URL + '/images/code-coder-codes-2194062.jpeg'
        }
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
        text="Vi tilbyder en omkostning, som kan skaleres op og ned efter jeres behov – og som er nem at komme af med igen. I undgår tidskrævende ansættelsesprocesser, løbende uddannelse og karriereudvikling samt dyre omlægninger, når en medarbejder pludselig siger op. I fokuserer på det, som I er bedst til, og det samme gør vi – og sammen sparer vi penge.<ul><li>Kom hurtigt og billigt i gang – ingen lange og dyre ansættelsesprocesser.</li><li>Tænk ikke på videreuddannelse, karrieremuligheder og opsigelsesperioder – det står vi for.</li><li>Hvis en nøgleperson pludselig siger op, så har vi altid en konsulent, som hurtigt kan træde til.</li><li>Hvad enten I har brug for en React-designer, en Drupal-udvikler eller en Drupal-arkitekt, så har vi den hurtigste og mest prisfornuftige løsning.</li></ul>"
      />
      <SectionTitle title="Hvad kan vi bidrage med?" />
      <TeaserDeck
        img={<DrupalBigSVG />}
        title="Drupal-udvikling"
        text="Vi er eksperter i Drupal. Giv os en opgave, og vi løser den – seriøst."
        buttonText="Læs mere om Drupal"
        buttonIcon={<DrupalSVG />}
        buttonUrl="/drupal"
        buttonLayout="primary"
      />
      <TeaserDeck
        img={<ReactBigSVG />}
        title="React-udvikling"
        text="React er det hotte nu. Få en knivskarp og moderne frontend-løsning."
        buttonText="Læs mere om React"
        buttonIcon={<ReactSVG />}
        buttonUrl="/react"
        layout="secondary"
        buttonLayout="secondary"
      />
      <Wysiwyg
        title="Nogle af vores tilfredse kunder"
        text="Reveal IT har 12 år på bagen som udbyder af avancerede web-løsninger. Vi er specialister i webudvikling med Drupal og React og har blandt andet fungeret som konsulenter, arkitekter og udviklere for: <ul><li>Webbureauer</li><li>Aviser og mediekoncerner</li><li>Mellemstore virksomheder i alle brancher</li><li>Multinationale tech-virksomheder</li><li>Ministerier og kommuner</li><li>Biblioteker</li></ul> ...og mange flere."
      />
      <Wysiwyg
        title="Hvordan gør vi det?"
        text="Vi arbejder overvejende remote. I sparer en kontorplads, og vi sparer transporten.<br/><br/>I får en dedikeret konsulent hos os, som kender jeres organisation og holder fast i opgaverne fra start til slut, herunder deadlines og timeforbrug.<br/><br/>I bestemmer, om vi afregner per time eller en fast pris per projekt/opgave – eller vi stiller en fast medarbejder til rådighed for et fast beløb per måned.<br/><br/>Vi er fleksible og tilbyder den løsning, der passer bedst til jer."
      />
      <ContactForm
        title="Lad os høre fra jer"
        image={<ManSittingAtDesk />}
        text="Vi er nemme at snakke med, og vi er vant til at finde løsninger, der dækker vores kunders behov. Vi laver kun så lange aftaler, som I ønsker, så det er risikofrit at prøve os af.<br/><br/>Ring +45 71 99 03 77, eller skriv og få en snak om, hvad I har brug for."
      />
    </>
  ),
  '/testing': (
    <>
      <Hero title="This is the testing page" />
    </>
  )
};

const Main = ({ location }) => {
  const pathname = pages[location.pathname];
  if (pathname) return <main role="main">{pathname}</main>;
  return <NotFound />;
};

export default Main;
