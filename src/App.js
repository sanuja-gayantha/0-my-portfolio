import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// custom imports
import Home from './pages/Home';
import Projects from './pages/Projects';
import Error from './components/Error';
import Navbar from './components/Navbar';
import About from './components/About';
import ProjectsBar from './components/ProjectsBar';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        {/* <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/ProjectsBar'>
          <ProjectsBar />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route> */}
        <Route exact path='/ProjectsBar/projects'>
          <Projects />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
