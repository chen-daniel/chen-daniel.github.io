import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './Router.css';
import Home from './Home/Home.component';
import About from './About/About.component';
import Resume from './Resume/Resume.component';

class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Router;
