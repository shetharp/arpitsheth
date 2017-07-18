import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SlideBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="Slide__body">{this.props.children}</div>
    );
  }
}
export default SlideBody;
