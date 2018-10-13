import React from 'react';

import Photo from '../../../common-components/Photo/Photo.component';

import './Cosplay.css';

class Cosplay extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const wrapper = document.getElementById('wrapper');
      wrapper.classList.remove('is-loading');
    }, 50);
    let s = document.createElement('script');
    s.src = 'assets/js/poptroxInit.js';
    s.type = 'text/javascript';
    s.async = true;
    s.id = 'poptroxScript';
    document.body.appendChild(s);
  }

  componentWillUnmount() {
    const script = document.getElementById('poptroxScript');
    script.parentNode.removeChild(script);
    const poptroxDiv = document.getElementsByClassName('poptrox-overlay');
    poptroxDiv[0].parentNode.removeChild(poptroxDiv[0]);
  }

  render() {
    return (
      <section className="tiles" id="main">
        <Photo src="/assets/images/pic17.jpg" />
        <Photo src="/assets/images/pic16.jpg" />
        <Photo src="/assets/images/pic04.jpg" />
        <Photo src="/assets/images/pic05.jpg" />
        <Photo src="/assets/images/pic06.jpg" />
        <Photo src="/assets/images/pic07.jpg" />
      </section>
    );
  }
}

export default Cosplay;
