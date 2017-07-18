import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './Slide.css';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let displayButton = null;
    if (this.props.slideButton && !this.props.slideLinkExternal) {
      displayButton = <Link to={this.props.slideLink} className="Slide__button">{this.props.slideButton}</Link>;
    }
    else if (this.props.slideButton && this.props.slideLinkExternal) {
      displayButton = <a href={this.props.slideLink} className="Slide__button">{this.props.slideButton}</a>;
    }


    return (
      <section className={"Slide Slide_" + this.props.slideID + " " + this.props.slideClass} id={this.props.slideID}>
        <div className="Slide__content">
          <h1 className="Slide__title">{this.props.children}</h1>
          {displayButton}
        </div>
      </section>
    );
  }
}

Slide.propTypes = {
  slideID: PropTypes.string.isRequired,
  slideClass: PropTypes.string,
  slideButton: PropTypes.string,
  slideLink: PropTypes.string,
  slideLinkExternal: PropTypes.bool,
}

Slide.defaultProps = {
  slideLink: "#",
  slideLinkExternal: false,
}
export default Slide;
