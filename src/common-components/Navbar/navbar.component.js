import React from 'react';
import { HashRouter } from 'react-router-dom';

import DelayLink from '../DelayLink/DelayLink.component';

import './Navbar.css';

class Navbar extends React.Component {
  componentDidMount() {
    let s = document.createElement('script');
    s.src = 'assets/js/main.js';
    s.type = 'text/javascript';
    s.async = true;
    document.body.appendChild(s);
  }

  _delayStart = (e, to) => {
    const wrapper = document.getElementById('wrapper');
    wrapper.className = 'is-loading';
  };

  render() {
    return (
      <HashRouter>
        <nav id="nav">
          <ul>
            <DelayLink to="/" delay={750} onDelayStart={this._delayStart}>
              <p>Home</p>
            </DelayLink>
            <DelayLink to="/about" delay={750} onDelayStart={this._delayStart}>
              <p>About</p>
            </DelayLink>
            <DelayLink to="/resume" delay={750} onDelayStart={this._delayStart}>
              <p>Resume</p>
            </DelayLink>
            <DelayLink
              to="/projects"
              delay={750}
              onDelayStart={this._delayStart}
            >
              <p>Projects</p>
            </DelayLink>
            <DelayLink
              to="/photography"
              delay={750}
              onDelayStart={this._delayStart}
            >
              <p>Photography</p>
              <ul>
                <DelayLink
                  to="/photography/portrait"
                  delay={750}
                  onDelayStart={this._delayStart}
                >
                  <p>Portrait</p>
                </DelayLink>
                <DelayLink
                  to="/photography/street_urban"
                  delay={750}
                  onDelayStart={this._delayStart}
                >
                  <p>Street/Urban</p>
                </DelayLink>
                <DelayLink
                  to="/photography/landscape"
                  delay={750}
                  onDelayStart={this._delayStart}
                >
                  <p>Landscape</p>
                </DelayLink>
                <DelayLink
                  to="/photography/event"
                  delay={750}
                  onDelayStart={this._delayStart}
                >
                  <p>Event</p>
                </DelayLink>
                <DelayLink
                  to="/photography/cosplay"
                  delay={750}
                  onDelayStart={this._delayStart}
                >
                  <p>Cosplay</p>
                </DelayLink>
              </ul>
            </DelayLink>
          </ul>
        </nav>
      </HashRouter>
    );
  }
}

export default Navbar;
