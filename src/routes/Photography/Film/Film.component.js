import React from 'react';

import $ from 'jquery';

import Photo from '../../../common-components/Photo/Photo.component';

class Film extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const wrapper = $('#wrapper');
      wrapper.removeClass('is-loading');
      const body = $('body');
      body.removeClass('modal-active');
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
        <Photo src="/assets/images/Film/06.jpg" />
        <Photo src="/assets/images/Film/05.jpg" />
        <Photo src="/assets/images/Film/04.jpg" />
        <Photo src="/assets/images/Film/03.jpg" />
        <Photo src="/assets/images/Film/02.jpg" />
        <Photo src="/assets/images/Film/01.jpg" />
      </section>
    );
  }
}

export default Film;
