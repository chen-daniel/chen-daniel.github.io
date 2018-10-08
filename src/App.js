import React from 'react';

import Router from './routes/Router';

import './App.css';

export default () => (
  <div id="wrapper">
    <Router />
    <footer id="footer">
      <ul className="copyright">
        <li>&copy; Daniel Chen</li>
      </ul>
    </footer>
  </div>
);
