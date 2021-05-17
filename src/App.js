import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import Hamburger from './components/hamburger/hamburger';
import Main from './Main';
import Footer from './components/footer/footer';
import './styles/styles.scss';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Menu setShowMenu={setShowMenu} showMenu={showMenu} classNames={showMenu ? ' menu--open' : ''} />
      <Hamburger showMenu={showMenu} onClick={() => setShowMenu(!showMenu)} />
      <Header />
      <Route component={Main} />
      <Footer />
    </Router>
  );
};

export default App;
