import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SlideTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <h1 className="Slide__title">{this.props.children}</h1>
    );
  }
}
export default SlideTitle;
