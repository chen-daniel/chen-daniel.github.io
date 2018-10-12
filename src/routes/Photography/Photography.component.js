import React from 'react';

import PhotographyLink from '../../common-components/PhotographyLink/PhotographyLink.component';

import './Photography.css';
class Photography extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const wrapper = document.getElementById('wrapper');
      wrapper.classList.remove('is-loading');
    }, 10);
  }

  render() {
    return (
      <section className="tiles" id="main">
        <PhotographyLink
          articlestyle="style1"
          src="/assets/images/pic17.jpg"
          to="/photography/portrait"
          title="Portrait"
        />
        <PhotographyLink
          articlestyle="style2"
          src="/assets/images/pic16.jpg"
          to="/photography/street_urban"
          title="Street/Urban"
        />
        <PhotographyLink
          articlestyle="style3"
          src="/assets/images/pic18.jpg"
          to="/photography/landscape"
          title="Landscape"
        />
        <PhotographyLink
          articlestyle="style4"
          src="/assets/images/pic02.jpg"
          to="/photography/event"
          title="Event"
        />
        <PhotographyLink
          articlestyle="style5"
          src="/assets/images/pic03.jpg"
          to="/photography/cosplay"
          title="Cosplay"
        />
      </section>
    );
  }
}

export default Photography;
