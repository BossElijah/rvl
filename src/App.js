import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './styles/styles.scss';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      {/* <Route component={component} /> */}
      <Footer />
    </Router>
  );
};

export default App;
