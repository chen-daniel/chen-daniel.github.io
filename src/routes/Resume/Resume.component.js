import React from 'react';

import './Resume.css';

export default () => (
  <section className="resume-page" id="main">
    <embed
      src="assets/files/Resume.pdf#view=FitH"
      alt="pdf"
      className="resume-pdf"
    />
  </section>
);
