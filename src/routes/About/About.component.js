import React from 'react';

import './About.css';

class About extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const wrapper = document.getElementById('wrapper');
      wrapper.classList.remove('is-loading');
    }, 10);
  }

  render() {
    return (
      <section className="about-page" id="main">
        <header>
          <span className="avatar">
            <img alt="" id="about-img" />
          </span>
        </header>
        <p>
          Hi! My name is Daniel and I'm currently a Computer Science student at
          Northeastern University with a minor in Entrepreneurship. I'm
          passionate about building, iterating upon, and optimizing solutions
          that put the user first. I was born in Canada, grew up in Hong Kong,
          and studied for a year back in Canada before moving to Boston. My
          interest in computer science was solidified during my first university
          lecture and since then I've had the opportunity to continuously grow
          and develop in the field. My interests currently lie in full-stack web
          development, AI, distributed systems, game development, and robotics.
          <br />
          <br />
          Most recently I was employed as a Software Developer Co-op at Circle.
          At this position, I have had the privilege of working with an
          extremely experienced and talented group of developers who have helped
          me improve as both a developer and a team member.
          <br />
          <br />
          Outside of VS Code, I also enjoy photography (Former Canon user
          converted to Sony), film, keeping up with tech news, gaming (Xbox
          FTW), basketball (Go Lebron), and hip-hop dance (WOO Kinjaz).
        </p>
      </section>
    );
  }
}

export default About;
