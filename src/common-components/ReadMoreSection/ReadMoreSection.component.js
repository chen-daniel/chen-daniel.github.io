import React from 'react';

import './ReadMoreSection.css';

/*
 * Wraps the React Router Link component and creates a delay after the link is clicked.
 */
class ReadMoreSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false
    };
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState = e => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const className = this.state.open ? 'show' : '';
    const prompt = this.state.open ? 'Hide' : 'Read More';
    return (
        <div>
            <div className={ `expand-content ${className}` }>
                { this.props.children }
            </div>
            <div className="expand-prompt" onClick={ this.toggleState }>
                { prompt }
            </div>
        </div>
    )
  }
}

export default ReadMoreSection;
