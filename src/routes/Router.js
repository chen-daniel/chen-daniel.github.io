import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../common-components/Navbar/navbar.component';

import './Router.css';
import Home from './Home/Home.component';
import About from './About/About.component';
import Resume from './Resume/Resume.component';
import Projects from './Projects/Projects.component';
import Photography from './Photography/Photography.component';

export default () => (
  <HashRouter>
    <Switch>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/photography" component={Photography} />
    </Switch>
  </HashRouter>
);
