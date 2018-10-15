import React from 'react';

import Photo from '../../../common-components/Photo/Photo.component';

class Landscape extends React.Component {
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
        <Photo src="/assets/images/Landscape/11.jpg" />
        <Photo src="/assets/images/Landscape/10.jpg" />
        <Photo src="/assets/images/Landscape/09.jpg" />
        <Photo src="/assets/images/Landscape/08.jpg" />
        <Photo src="/assets/images/Landscape/07.jpg" />
        <Photo src="/assets/images/Landscape/06.jpg" />
        <Photo src="/assets/images/Landscape/05.jpg" />
        <Photo src="/assets/images/Landscape/04.jpg" />
        <Photo src="/assets/images/Landscape/03.jpg" />
        <Photo src="/assets/images/Landscape/02.jpg" />
        <Photo src="/assets/images/Landscape/01.jpg" />
      </section>
    );
  }
}

export default Landscape;
