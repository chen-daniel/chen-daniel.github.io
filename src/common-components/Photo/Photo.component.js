import React from 'react';

/*
 * Wraps the React Router Link component and creates a delay after the link is clicked.
 */
class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
  }

  render() {
    return (
      <article className="thumb">
        <a href={this.props.src} className="image">
          <img src={this.props.src} alt="" />
        </a>
      </article>
    );
  }
}

export default Photo;
