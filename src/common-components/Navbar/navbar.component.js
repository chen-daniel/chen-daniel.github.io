import React from 'react';
import { HashRouter } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import $ from 'jquery';

import DelayLinkList from '../DelayLink/DelayLinkList.component';

import './navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuStatus: false
    };
    this._closeMenu = this._closeMenu.bind(this);
  }
  componentDidMount() {
    let s = document.createElement('script');
    s.src = 'assets/js/dropotronInit.js';
    s.type = 'text/javascript';
    s.async = true;
    s.id = 'dropotronScript';
    document.body.appendChild(s);
    window.addEventListener("resize", this.updateDimensions.bind(this));
    this.updateDimensions();
  }

  componentDidUpdate() {
    $('#dropotronScript').remove();
    let s = document.createElement('script');
    s.src = 'assets/js/dropotronInit.js';
    s.type = 'text/javascript';
    s.async = true;
    s.id = 'dropotronScript';
    document.body.appendChild(s);
  }

  updateDimensions() {
    this.setState({ menuStatus: this.state.menuStatus });
  }

  _delayStart = (e, to) => {
    const wrapper = document.getElementById('wrapper');
    wrapper.className = 'is-loading';
  };

  _closeMenu = () => {
    this.setState({ menuStatus: false });
  }

  render() {
    if (document.documentElement.clientWidth < 550) {
      return (
        <HashRouter>
          <Menu isOpen={ this.state.menuStatus }className="bm-menu">
            <ul>
            <DelayLinkList to="/" closeMenu={this._closeMenu} delay={375} onDelayStart={this._delayStart}>
                <p>Home</p>
              </DelayLinkList>
              <DelayLinkList
                to="/about"
                closeMenu={this._closeMenu}
                delay={375}
                onDelayStart={this._delayStart}
              >
                <p>About</p>
              </DelayLinkList>
              <DelayLinkList
                to="/resume"
                closeMenu={this._closeMenu}
                delay={375}
                onDelayStart={this._delayStart}
              >
                <p>Resume</p>
              </DelayLinkList>
              </ul>
          </Menu>
        </HashRouter>
      )
    }
    return (
      <HashRouter>
        <nav id="nav">
          <ul>
            <DelayLinkList to="/" delay={375} onDelayStart={this._delayStart}>
              <p>Home</p>
            </DelayLinkList>
            <DelayLinkList
              to="/about"
              delay={375}
              onDelayStart={this._delayStart}
            >
              <p>About</p>
            </DelayLinkList>
            <DelayLinkList
              to="/resume"
              delay={375}
              onDelayStart={this._delayStart}
            >
              <p>Resume</p>
            </DelayLinkList>
          </ul>
        </nav>
      </HashRouter>
    );
  }
}

export default Navbar;
