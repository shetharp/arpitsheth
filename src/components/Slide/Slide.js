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
    let displayTitle = null;
    let displayButton = null;

    if (this.props.title) {
      displayTitle = this.props.title;
      console.log(displayTitle);
    }

    if (this.props.button && !this.props.linkExternal) {
      displayButton = <Link to={this.props.link} className="Slide__button">{this.props.button}</Link>;
    }
    else if (this.props.button && this.props.linkExternal) {
      displayButton = <a href={this.props.link} className="Slide__button">{this.props.button}</a>;
    }


    return (
      <section className={"Slide Slide_" + this.props.id + " " + this.props.className} id={this.props.id}>
        <div className="Slide__content">
          {this.props.children}
          {displayButton}
        </div>
      </section>
    );
  }
}

Slide.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  button: PropTypes.string,
  link: PropTypes.string,
  linkExternal: PropTypes.bool,
}

Slide.defaultProps = {
  className: "",
  link: "#",
  linkExternal: false,
}
export default Slide;
