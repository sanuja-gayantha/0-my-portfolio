import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// custom imports
import Home from './pages/Home';
import Projects from './pages/Projects';
import Error from './components/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/projects'>
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
