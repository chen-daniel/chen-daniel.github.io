import React from 'react';

import Photo from '../../../common-components/Photo/Photo.component';

import './Event.css';
class Event extends React.Component {
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
        <Photo src="/assets/images/Event/18.jpg" />
        <Photo src="/assets/images/Event/17.jpg" />
        <Photo src="/assets/images/Event/16.jpg" />
        <Photo src="/assets/images/Event/15.jpg" />
        <Photo src="/assets/images/Event/14.jpg" />
        <Photo src="/assets/images/Event/13.jpg" />
        <Photo src="/assets/images/Event/12.jpg" />
        <Photo src="/assets/images/Event/11.jpg" />
        <Photo src="/assets/images/Event/10.jpg" />
        <Photo src="/assets/images/Event/09.jpg" />
        <Photo src="/assets/images/Event/08.jpg" />
        <Photo src="/assets/images/Event/07.jpg" />
        <Photo src="/assets/images/Event/06.jpg" />
        <Photo src="/assets/images/Event/05.jpg" />
        <Photo src="/assets/images/Event/04.jpg" />
        <Photo src="/assets/images/Event/03.jpg" />
        <Photo src="/assets/images/Event/02.jpg" />
        <Photo src="/assets/images/Event/01.jpg" />
      </section>
    );
  }
}

export default Event;
