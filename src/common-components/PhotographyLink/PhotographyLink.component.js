import React from 'react';
import DelayedLink from '../DelayLink/DelayLink.component';

/*
 * Wraps the React Router Link component and creates a delay after the link is clicked.
 */
class PhotographyLink extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = null;
  }

  _delayStart = (e, to) => {
    const wrapper = document.getElementById('wrapper');
    wrapper.className = 'is-loading';
  };

  render() {
    const style = {
      'background-image': `url(${this.props.src})`,
      cursor: 'pointer',
      outline: '0px'
    };
    return (
      <article className={this.props.articlestyle + ' thumb'}>
        <a className="image" style={style} />
        <DelayedLink
          to={this.props.to}
          delay={375}
          onDelayStart={this._delayStart}
        >
          <h2>{this.props.title}</h2>
        </DelayedLink>
      </article>
    );
  }
}

export default PhotographyLink;
