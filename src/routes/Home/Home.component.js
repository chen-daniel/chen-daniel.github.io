import React from 'react';

import $ from 'jquery';

import './Home.css';

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const wrapper = $('#wrapper');
      wrapper.removeClass('is-loading');
      const body = $('body');
      body.removeClass('modal-active');
    }, 50);
  }
  render() {
    return (
      <section className="home-page" id="main">
        <header>
          <span className="avatar">
            <img src={"/assets/images/logo.png"} alt="" id="home-img" />
          </span>
          <h1>Daniel Chen</h1>
          <br />
          <h3>Software Engineer II @ Toast</h3>
          <br />
        </header>

        <footer>
          <ul className="icons">
            <li>
              <a
                href="https://www.github.com/chen-daniel/"
                className="fa-github"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dchen7321/"
                className="fa-linkedin"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dchenfotografeez/"
                className="fa-instagram"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/dchen7321/"
                className="fa-facebook"
              >
                Facebook
              </a>
            </li>
          </ul>
        </footer>
      </section>
    );
  }
}

export default Home;
