import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
// import Projects from './components/pages/Projects';
import About from './components/pages/About';
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
          {/* <Route path='/react-jen-portfolio/projects' exact component={Projects} /> */}
          <Route path='/react-jen-portfolio/about' exact component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
