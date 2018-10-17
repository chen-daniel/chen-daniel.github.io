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
        <object
          data="assets/files/Resume.pdf#view=FitH"
          type="application/pdf"
          className="resume-pdf"
        >
          <embed
            src="assets/files/Resume.pdf#view=FitH"
            type="application/pdf"
            className="resume-pdf"
          />
        </object>
      </section>
    );
  }
}

export default About;
