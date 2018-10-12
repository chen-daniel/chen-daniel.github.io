import React from 'react';
import { HashRouter } from 'react-router-dom';

import DelayLinkList from '../DelayLink/DelayLinkList.component';

import './Navbar.css';

class Navbar extends React.Component {
  componentDidMount() {
    let s = document.createElement('script');
    s.src = 'assets/js/dropotronInit.js';
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
            <DelayLinkList to="/" delay={350} onDelayStart={this._delayStart}>
              <p>Home</p>
            </DelayLinkList>
            <DelayLinkList
              to="/about"
              delay={350}
              onDelayStart={this._delayStart}
            >
              <p>About</p>
            </DelayLinkList>
            <DelayLinkList
              to="/resume"
              delay={350}
              onDelayStart={this._delayStart}
            >
              <p>Resume</p>
            </DelayLinkList>
            <DelayLinkList
              to="/projects"
              delay={350}
              onDelayStart={this._delayStart}
            >
              <p>Projects</p>
            </DelayLinkList>
            <DelayLinkList
              to="/photography"
              delay={350}
              onDelayStart={this._delayStart}
            >
              <p>Photography</p>
              <ul>
                <DelayLinkList
                  to="/photography/portrait"
                  delay={350}
                  onDelayStart={this._delayStart}
                >
                  <p>Portrait</p>
                </DelayLinkList>
                <DelayLinkList
                  to="/photography/street_urban"
                  delay={350}
                  onDelayStart={this._delayStart}
                >
                  <p>Street/Urban</p>
                </DelayLinkList>
                <DelayLinkList
                  to="/photography/landscape"
                  delay={350}
                  onDelayStart={this._delayStart}
                >
                  <p>Landscape</p>
                </DelayLinkList>
                <DelayLinkList
                  to="/photography/event"
                  delay={350}
                  onDelayStart={this._delayStart}
                >
                  <p>Event</p>
                </DelayLinkList>
                <DelayLinkList
                  to="/photography/cosplay"
                  delay={350}
                  onDelayStart={this._delayStart}
                >
                  <p>Cosplay</p>
                </DelayLinkList>
              </ul>
            </DelayLinkList>
          </ul>
        </nav>
      </HashRouter>
    );
  }
}

export default Navbar;
