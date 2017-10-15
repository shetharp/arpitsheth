import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SlideImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgStatus: "downloading",
      imgSrc: "unknown src"
    };
  }

  componentDidMount() {
    this.setState({imgStatus: "mounted"});
  }
  handleImageLoaded() {
    this.setState({imgStatus: "loaded", imgSrc: this.theImg.currentSrc});
    // console.log(this.theImg.currentSrc);
  }
  handleImageErrored() {
    this.setState({imgStatus: "fail"})
  }

  render() {
    let bgSet = null;
    let displayImg = null;
    if(this.props.bg) {
      bgSet =
        (this.props.bg)["def"] + " 3000w," +
        (this.props.bg)["xxs"] + " 500w";

      displayImg = <img
        ref={(img) => {this.theImg = img; }}
        src={bgSet["def"]}
        srcSet={bgSet}
        onLoad={this.handleImageLoaded.bind(this)}
        onError={this.handleImageErrored.bind(this)}
        alt={this.props.id}
        className="Slide__img"/>
    }
    return (
      <div>
        {displayImg}
      </div>

    );
  }
}
export default SlideImg;

SlideImg.PropTypes = {

}
