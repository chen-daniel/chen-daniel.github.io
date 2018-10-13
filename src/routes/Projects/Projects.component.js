import React from 'react';

class Projects extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const wrapper = document.getElementById('wrapper');
      wrapper.classList.remove('is-loading');
    }, 50);
  }

  render() {
    return (
      <section className="about-page" id="main">
        <p>
          Hi! My name is Daniel and I'm currently a Computer Science student at
          Northeastern University with a minor in Entrepreneurship. I was born
          in Canada, grew up in Hong Kong, and studied for a year in Canada
          before moving to Boston. Coding has been a passion of mine since I
          attended my first university lecture. Since then I've had the
          opportunity to continuously grow and develop in the field. My
          specialties at the moment are in full-stack web development. Through
          classes, hackathons, and work, I've been given exposure to a myriad of
          web technologies and frameworks.
          <br />
          <br />
          Most recently I was employed as a Software Developer Co-op at Circle.
          At this position, I have had the opportunity to work with an extremely
          experienced and talented team of developers who have all helped me
          improve as both a developer and a member of a team.
          <br />
          <br />
          Outside of Visual Studio Code, I also enjoy photography (Former Canon
          user converted to Sony), film, keeping up with tech news, gaming (Xbox
          FTW), basketball (Go Lebron), and hip-hop dance (WOO Kinjaz).
        </p>
      </section>
    );
  }
}

export default Projects;
