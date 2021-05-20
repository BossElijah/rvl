import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import Main from './Main';
import Footer from './components/footer/footer';
import './styles/styles.scss';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  if (showMenu) {
    document.querySelector('body').style.overflow = 'hidden';
  } else {
    document.querySelector('body').style.overflow = 'unset';
  }

  return (
    <Router>
      <ScrollToTop />
      <Header showMenu={showMenu} hamburgerOnClick={() => setShowMenu(!showMenu)} />
      <Menu setShowMenu={setShowMenu} showMenu={showMenu} />
      <Route component={Main} />
      <Footer />
    </Router>
  );
};

export default App;
