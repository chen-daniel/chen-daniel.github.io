import React from 'react';

import DelayedLink from '../../common-components/DelayLink/DelayLink.component';

import './Photography.css';
class Photography extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const wrapper = document.getElementById('wrapper');
      wrapper.classList.remove('is-loading');
    }, 10);
  }

  _delayStart = (e, to) => {
    const wrapper = document.getElementById('wrapper');
    wrapper.className = 'is-loading';
  };

  render() {
    return (
      <section className="tiles" id="main">
        <article className="style1">
          <span className="image">
            <img src="/assets/images/pic17.jpg" alt="" />
          </span>
          <DelayedLink
            to="/photography/portrait"
            delay={350}
            onDelayStart={this._delayStart}
          >
            <h2>Portrait</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </DelayedLink>
        </article>
        <article className="style2">
          <span className="image">
            <img src="/assets/images/pic16.jpg" alt="" />
          </span>
          <DelayedLink
            to="/photography/street_urban"
            delay={350}
            onDelayStart={this._delayStart}
          >
            <h2>Street/Urban</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </DelayedLink>
        </article>
        <article className="style3">
          <span className="image">
            <img src="/assets/images/pic04.jpg" alt="" />
          </span>
          <DelayedLink
            to="/photography/landscape"
            delay={350}
            onDelayStart={this._delayStart}
          >
            <h2>Landscape</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </DelayedLink>
        </article>
        <article className="style4">
          <span className="image">
            <img src="/assets/images/pic05.jpg" alt="" />
          </span>
          <DelayedLink
            to="/photography/event"
            delay={350}
            onDelayStart={this._delayStart}
          >
            <h2>Event</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </DelayedLink>
        </article>
        <article className="style5">
          <span className="image">
            <img src="/assets/images/pic06.jpg" alt="" />
          </span>
          <DelayedLink
            to="/photography/cosplay"
            delay={350}
            onDelayStart={this._delayStart}
          >
            <h2>Cosplay</h2>
            <div className="content">
              <p>
                Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                et feugiat.
              </p>
            </div>
          </DelayedLink>
        </article>
      </section>
    );
  }
}

export default Photography;
