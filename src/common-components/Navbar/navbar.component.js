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
            <li>
              <DelayLink to="/" delay={750} onDelayStart={this._delayStart}>
                Home
              </DelayLink>
            </li>
            <li>
              <DelayLink
                to="/about"
                delay={750}
                onDelayStart={this._delayStart}
              >
                About
              </DelayLink>
            </li>
            <li>
              <DelayLink
                to="/resume"
                delay={750}
                onDelayStart={this._delayStart}
              >
                Resume
              </DelayLink>
            </li>
            <li>
              <DelayLink
                to="/projects"
                delay={750}
                onDelayStart={this._delayStart}
              >
                Projects
              </DelayLink>
            </li>
            <li>
              <DelayLink
                to="/photography"
                delay={750}
                onDelayStart={this._delayStart}
              >
                Photography
              </DelayLink>
              <ul>
                <li>
                  <DelayLink
                    to="/photography/portrait"
                    delay={750}
                    onDelayStart={this._delayStart}
                  >
                    Portrait
                  </DelayLink>
                </li>
                <li>
                  <DelayLink
                    to="/photography/street_urban"
                    delay={750}
                    onDelayStart={this._delayStart}
                  >
                    Street/Urban
                  </DelayLink>
                </li>
                <li>
                  <DelayLink
                    to="/photography/landscape"
                    delay={750}
                    onDelayStart={this._delayStart}
                  >
                    Landscape
                  </DelayLink>
                </li>
                <li>
                  <DelayLink
                    to="/photography/event"
                    delay={750}
                    onDelayStart={this._delayStart}
                  >
                    Event
                  </DelayLink>
                </li>
                <li>
                  <DelayLink
                    to="/photography/cosplay"
                    delay={750}
                    onDelayStart={this._delayStart}
                  >
                    Cosplay
                  </DelayLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </HashRouter>
    );
  }
}

export default Navbar;
