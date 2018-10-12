import React from 'react';

import './Resume.css';

class About extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const wrapper = document.getElementById('wrapper');
      wrapper.classList.remove('is-loading');
    }, 10);
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
