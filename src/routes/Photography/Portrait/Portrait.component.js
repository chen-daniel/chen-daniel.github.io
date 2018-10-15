import React from 'react';

import $ from 'jquery';

import Photo from '../../../common-components/Photo/Photo.component';

class Portrait extends React.Component {
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
        <Photo src="/assets/images/Portrait/18.jpg" />
        <Photo src="/assets/images/Portrait/17.jpg" />
        <Photo src="/assets/images/Portrait/16.jpg" />
        <Photo src="/assets/images/Portrait/15.jpg" />
        <Photo src="/assets/images/Portrait/14.jpg" />
        <Photo src="/assets/images/Portrait/13.jpg" />
        <Photo src="/assets/images/Portrait/12.jpg" />
        <Photo src="/assets/images/Portrait/11.jpg" />
        <Photo src="/assets/images/Portrait/10.jpg" />
        <Photo src="/assets/images/Portrait/09.jpg" />
        <Photo src="/assets/images/Portrait/08.jpg" />
        <Photo src="/assets/images/Portrait/07.jpg" />
        <Photo src="/assets/images/Portrait/06.jpg" />
        <Photo src="/assets/images/Portrait/05.jpg" />
        <Photo src="/assets/images/Portrait/04.jpg" />
        <Photo src="/assets/images/Portrait/03.jpg" />
        <Photo src="/assets/images/Portrait/02.jpg" />
        <Photo src="/assets/images/Portrait/01.jpg" />
      </section>
    );
  }
}

export default Portrait;
