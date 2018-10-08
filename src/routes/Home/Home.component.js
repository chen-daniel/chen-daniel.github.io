import React from 'react';

import './Home.css';

export default () => (
  <section id="main">
    <header>
      <span className="avatar">
        <img alt="" id="home-img" />
      </span>
      <h1>Daniel Chen</h1>
      <h2>Northeastern University Student</h2>
      <p>
        Computer Science Major
        <br />
        Entrepreneurship Minor
      </p>
    </header>

    <footer>
      <ul className="icons">
        <li>
          <a href="https://www.github.com/chen-daniel/" className="fa-github">
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
          <a href="https://www.facebook.com/dchen7321/" className="fa-facebook">
            Facebook
          </a>
        </li>
      </ul>
    </footer>
  </section>
);
