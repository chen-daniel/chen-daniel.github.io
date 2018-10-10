import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './Router.css';
import Home from './Home/Home.component';
import About from './About/About.component';
import Resume from './Resume/Resume.component';
import Projects from './Projects/Projects.component';
import Photography from './Photography/Photography.component';

import Portrait from './Photography/Portrait/Portrait.component';
import Street_Urban from './Photography/Street_Urban/Street_Urban.component';
import Landscape from './Photography/Landscape/Landscape.component';
import Event from './Photography/Event/Event.component';
import Cosplay from './Photography/Cosplay/Cosplay.component';

export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/photography" component={Photography} />
      <Route exact path="/photography/portrait" component={Portrait} />
      <Route exact path="/photography/street_urban" component={Street_Urban} />
      <Route exact path="/photography/landscape" component={Landscape} />
      <Route exact path="/photography/event" component={Event} />
      <Route exact path="/photography/cosplay" component={Cosplay} />
    </Switch>
  </HashRouter>
);
