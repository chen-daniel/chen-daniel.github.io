import React from 'react';

import $ from 'jquery';

import PhotographyLink from '../../common-components/PhotographyLink/PhotographyLink.component';

import './Photography.css';
class Photography extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const wrapper = $('#wrapper') 
      wrapper.removeClass('is-loading');
      const body = $('body')
      body.removeClass('modal-active');
    }, 50);
  }

  render() {
    return (
      <section className="tiles" id="main">
        <PhotographyLink
          articlestyle="style1"
          src="/assets/images/Portrait/16.jpg"
          to="/photography/portrait"
          title="Portrait"
        />
        <PhotographyLink
          articlestyle="style2"
          src="/assets/images/Street_Urban/16.jpg"
          to="/photography/street_urban"
          title="Street/Urban"
        />
        <PhotographyLink
          articlestyle="style3"
          src="/assets/images/Landscape/11.jpg"
          to="/photography/landscape"
          title="Landscape"
        />
        <PhotographyLink
          articlestyle="style4"
          src="/assets/images/Event/05.jpg"
          to="/photography/event"
          title="Event"
        />
        <PhotographyLink
          articlestyle="style5"
          src="/assets/images/Film/05.jpg"
          to="/photography/film"
          title="Film"
        />
        <PhotographyLink
          articlestyle="style6"
          src="/assets/images/Cosplay/06.jpg"
          to="/photography/cosplay"
          title="Cosplay"
        />
      </section>
    );
  }
}

export default Photography;
