import React from 'react';

import $ from 'jquery';

import './Resume.css';

class About extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const wrapper = $('#wrapper');
      wrapper.removeClass('is-loading');
      const body = $('body');
      body.removeClass('modal-active');
    }, 50);
  }

  render() {
    return (
      <section className="resume-page" id="main">
        <embed
          src="assets/files/Resume.pdf#view=FitH"
          alt="pdf"
          className="resume-pdf"
        />
      </section>
    );
  }
}

export default About;
