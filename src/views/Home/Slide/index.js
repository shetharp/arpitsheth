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

  static proptTypes = {
    slideID: PropTypes.string.isRequired,
    slideClass: PropTypes.string.isRequired,
  }

  render() {
    return (
      <section className={"Slide Slide--" + this.props.slideClass} id={this.props.slideID}>
        <div className="Slide__content">
          <h1 className="Slide__title">I build authentic <strong>brands</strong> that <em>bolster organizations</em>.</h1>
        </div>
      </section>
    );
  }
}

export default Slide;
