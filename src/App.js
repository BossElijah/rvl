import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './components/header/header';
import Hamburger from './components/hamburger/hamburger';
import Main from './Main';
import Footer from './components/footer/footer';
import './styles/styles.scss';

const App = () => (
  <Router>
    <ScrollToTop />
    <Hamburger />
    <Header />
    <Route component={Main} />
    <Footer />
  </Router>
);

export default App;
