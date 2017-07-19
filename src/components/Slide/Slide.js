import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './Slide.css';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgImg: <img src="" alt="" />,
      bgSrc: ""
    };
  }

  handleImageLoaded() {
    this.setState({bgSrc: this.theImg.currentSrc});
    console.log(this.theImg.currentSrc);
    console.log(this.state)
  }
  handleImageErrored() {
    console.log("Failed to load slide image.")
  }

  render() {
    // console.log("The bgSrc is: ");
    // console.log(this.state.bgSrc);
    let displayButton = null;
    let displayTempImg = null;

    if (this.props.bg) {
      let bgSet =
        (this.props.bg)["def"] + " 3000w," +
        (this.props.bg)["xxs"] + " 500w";

      displayTempImg = <img
        ref={(imgElem) => {this.theImg = imgElem;}}
        src={bgSet["def"]}
        srcSet={bgSet}
        onLoad={this.handleImageLoaded.bind(this)}
        onError={this.handleImageErrored.bind(this)}
        alt={this.props.id}
        className="Slide__tempImg"/>
    }

    if (this.props.button && !this.props.linkExternal) {
      displayButton = <Link to={this.props.link} className="Slide__button">{this.props.button}</Link>;
    }
    else if (this.props.button && this.props.linkExternal) {
      displayButton = <a href={this.props.link} className="Slide__button">{this.props.button}</a>;
    }

    return (
      <section
        id={this.props.id}
        className={"Slide Slide_" + this.props.id + " " + this.props.className}
        style={{backgroundImage: "url(" + this.state.bgSrc + ")"}}
      >
        <div className={"Slide__content" + ((this.props.wide)? " Slide__content_wide" : "")} >
          {this.props.children}
          {displayTempImg}
          {displayButton}
        </div>
      </section>
    );
  }
}

Slide.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  wide: PropTypes.bool,
  bg: PropTypes.shape({
    def: PropTypes.string.isRequired,
    xxs: PropTypes.string.isRequired
  }),
  button: PropTypes.string,
  link: PropTypes.string,
  linkExternal: PropTypes.bool,
}

Slide.defaultProps = {
  className: "",
  wide: false,
  link: "#",
  linkExternal: false,
}
export default Slide;
