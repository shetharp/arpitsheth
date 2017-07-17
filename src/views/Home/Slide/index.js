import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Slide.css';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPinned: false
    };
  }

  static propTypes = {
    slideID: PropTypes.string.isRequired,
    slideClass: PropTypes.string,
  }

  render() {
    return (
      <section className={"Slide Slide_" + this.props.slideID + " " + this.props.slideClass} id={this.props.slideID}>
        <div className="Slide__content">
          <h1 className="Slide__title">{this.props.children}</h1>
        </div>
      </section>
    );
  }
}

export default Slide;
