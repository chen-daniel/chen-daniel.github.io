import React from 'react';
import { Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import './navbar.css';

class Navbar extends React.Component {
  componentDidMount() {
    let s = document.createElement('script');
    s.src = 'assets/js/main.js';
    s.type = 'text/javascript';
    s.async = true;
    document.body.appendChild(s);
  }

  render() {
    return (
      <HashRouter>
        <nav id="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/photography">Photography</Link>
              <ul>
                <li>
                  <Link to="/photography/portrait">Portrait</Link>
                </li>
                <li>
                  <Link to="/photography/street_urban">Street/Urban</Link>
                </li>
                <li>
                  <Link to="/photography/landscape">Landscape</Link>
                </li>
                <li>
                  <Link to="/photography/event">Event</Link>
                </li>
                <li>
                  <Link to="/photography/cosplay">Cosplay</Link>
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
