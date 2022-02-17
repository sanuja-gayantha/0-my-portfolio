import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// custom imports
import Projects from './pages/Projects';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Updating from './components/Updating';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsBar from './components/ProjectsBar';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Hero />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/projectsbar'>
          <ProjectsBar />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        {/* <Route exact path='/resume'>
          <Resume />
        </Route> */}
        <Route exact path='/updating'>
          <Updating/>
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
