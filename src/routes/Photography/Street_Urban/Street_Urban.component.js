import React from 'react';

import $ from 'jquery';

import Photo from '../../../common-components/Photo/Photo.component';

const util = require('../util');

const numImages = 18;

class Street_Urban extends React.Component {
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

  generatePhotos() {
    const photoList = [];
    for (let i = numImages; i > 0; i--) {
      photoList.push(<Photo src={`/assets/images/Street_Urban/${util.ensureDoubleDigit(i)}.jpg`} />);
    }
    return photoList;
  }

  render() {
    return (
      <section className="tiles" id="main">
        { this.generatePhotos() }
      </section>
    );
  }
}

export default Street_Urban;
