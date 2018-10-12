import React from 'react';

import Router from './routes/Router';
import Navbar from './common-components/Navbar/Navbar.component';

import './App.css';
class App extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <Navbar />
        <div id="content">
          <Router />
        </div>
        <footer id="footer">
          <ul className="copyright">
            <li>&copy; Daniel Chen | HTML5 Up</li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
