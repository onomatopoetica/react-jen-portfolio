import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/react-jen-portfolio' exact component={Home} />
          <Route path='/react-jen-portfolio/services' exact component={Services} />
          <Route path='/react-jen-portfolio/products' exact component={Products} />
          <Route path='/react-jen-portfolio/sign-up' exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
