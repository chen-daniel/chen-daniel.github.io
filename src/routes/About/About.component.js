import React from 'react';

import $ from 'jquery';

import './About.css';

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
      <section className="about-page" id="main">
        <header>
          <span className="avatar">
            <img src={"/assets/images/profile.jpg"} alt="" id="about-img" />
          </span>
        </header>
        <p>
          Hi! My name is Daniel and I'm currently a Software Engineer II at Toast. 
          <br/>
          I am passionate about building elegant user experiences and love learning and developing on the cutting edge of technology. 
          I bring extensive experience in full stack development and low-level performance optimization. 
          Proficient in React, JavaScript, TypeScript, Java, Kotlin, and Swift, my approach emphasizes data-backed decision-making, with a focus on A/B testing and experimentation.
          Collaboration is a key aspect of the work, extending to engineers, designers, product managers, data scientists, and quality assurance. 
          Beyond this, I also love learning new technologies, skills, and tools to drive innovation and growth as well as mentoring and sharing knowledge with others.
          <br/>
          My interests lie in exploring opportunities in VR/AR, game development, applied machine learning, distributed systems, and robotics.
        </p>
      </section>
    );
  }
}

export default About;
