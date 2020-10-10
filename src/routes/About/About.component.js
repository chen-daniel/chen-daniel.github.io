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
          Hi! My name is Daniel and I'm currently a Software Engineer at Facebook. I'm
          passionate about building, iterating upon, and optimizing solutions
          that put a focus on user experience. I was born in Canada, grew up in
          Hong Kong, and studied for a year back in Canada before moving to
          Boston. My interest in computer science was solidified during my first
          university lecture and since then I've had the opportunity to
          continuously grow and develop in the field. My interests currently lie
          in full-stack web development, VR/AR, AI, distributed systems, game
          development, and robotics.
          <br />
          Outside of VS Code, I also enjoy photography (Former Canon user
          converted to Sony), film, keeping up with tech news, gaming (Xbox
          FTW), basketball (Go Lebron), and watching hip-hop dance videos (Kinjaz).
          <br />
          <br />
          Currently learning: Firebase
          <br />
          Currently building: CosLab
        </p>
      </section>
    );
  }
}

export default About;
