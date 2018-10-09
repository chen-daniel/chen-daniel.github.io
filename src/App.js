import React from 'react';

import Router from './routes/Router';
import Navbar from './common-components/Navbar/navbar.component';

import './App.css';

export default () => (
  <div>
    <Navbar />
    <div>
      <Router />
      <footer id="footer">
        <ul className="copyright">
          <li>&copy; Daniel Chen</li>
        </ul>
      </footer>
    </div>
  </div>
);
