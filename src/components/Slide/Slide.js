import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import SlideTitle from './SlideTitle';
import './Slide.css';

/**
 * A Slide displays content that takes up the full screen with a background and
 * large text. Body text and a call to action button can also be included.
 */
class Slide extends Component {
  static propTypes = {
    /**
     * The id or name of the slide
     * The id attribute (useful for links) is set to {this.props.id}
     * The className attribute (useful for CSS) will include a class for
     * "Slide__" + {this.props.id}
     * Precondition: cannot have spaces (use hyphens '-' instead)
     */
    id: PropTypes.string.isRequired,
    /** Additional classes  */
    className: PropTypes.string,
    /** Make the content wider to fit more*/
    wide: PropTypes.bool,
    /** Set of background images for the slide */
    // bg: PropTypes.shape({
    //   /** 1500px wide (Default image to display if srcset is unsupported) */
    //   def: PropTypes.string.isRequired,
    //   /** 3000px wide */
    //   lg: PropTypes.string,
    //   /** 900px wide */
    //   sm: PropTypes.string,
    //   /** 600px wide */
    //   xs: PropTypes.string,
    //   /** 150px wide */
    //   temp: PropTypes.string
    // }),
    /** Call to action button */
    button: PropTypes.shape({
      text: PropTypes.string.isRequired,
      /** The <Link to=""> value or <a href=""> value */
      link: PropTypes.string.isRequired,
      /** External links will use <a> else (by default) React Router <Link> */
      external: PropTypes.bool
    }),
  }

  static defaultProps = {
    className: "",
    wide: false,
  }

  constructor(props) {
    super(props);
    /**
     * The state manages the slide's background image
     * First, load the temp bg image in a placeholder div
     * Also, load the img srcset using this.props.bg as a hidden element
     * When hidden image has loaded, set its currentSrc to this.state.bgSrc
     * Then, set the background image of the Slide to this.state.bgSrc
     * Finally, set bgTemp to false and hide temp bg image via CSS transition
     */
    this.state = {
      /** Display the temporary bg image */
      // bgTemp: true,
      /** The currentSrc from srcset */
      // bgSrc: ""
    };
  }

  /** When the hidden image has successfully loaded, update the state to
   * hide the temp bg image and set the Slide's background image to the
   * desired currentSrc
   */
  // handleHiddenImgLoaded() {
  //   this.setState({bgTemp: false, bgSrc: this.desiredImg.currentSrc});
  // }

  /** When the hidden image fails to load, output an error */
  // handleHiddenImgErrored() {
  //   console.log("Failed to load slide image.")
  // }


  render() {
    // Low-quality temp image to be displayed while the placeholder image loads
    // let displayTempImg = null;
    // Hidden image being loaded with srcset to determine currentSrc
    // let displayHiddenImg = null;

    let button = this.props.button;
    let displayButton = null;

    // If the bg prop exists, set up the temp image and hidden desired image
    // if (this.props.bg) {
      // the value of img srcset
      // Image widths should match these width descriptors (1500px -> 1500w)
      // let bgSet = (this.props.bg)["def"] + " 1500w,";
      // bgSet += ((this.props.bg)["lg"])? ((this.props.bg)["lg"] + " 3000w,") : "";
      // bgSet += ((this.props.bg)["sm"])? ((this.props.bg)["sm"] + " 1000w,") : "";
      // bgSet += ((this.props.bg)["xs"])? ((this.props.bg)["xs"] + " 600w,") : "";
      // bgSet += ((this.props.bg)["temp"])? ((this.props.bg)["temp"] + " 150w,") : "";

      // displayTempImg = <div
      //   className={cx('Slide__tempImg', {'Slide__tempImg_hide': !this.state.bgTemp})}
      //   style={{backgroundImage: "url(" + this.props.bg.temp + ")"}}>
      // </div>

      {/* The ref attribute allows React to reference this element later
        * After the element renders, the callback function saves this image
        * element as a placeholderImg attribute in the Slide component
        */}
      // displayHiddenImg = <img
      //   ref={(imgElem) => {this.desiredImg = imgElem;}}
      //   src={bgSet["def"]}
      //   srcSet={bgSet}
      //   onLoad={this.handleHiddenImgLoaded.bind(this)}
      //   onError={this.handleHiddenImgErrored.bind(this)}
      //   alt={this.props.id}
      //   className="Slide__hiddenImg"/>
    // }

    // If button text is defined
    if (button && !button.external) {
      displayButton = <Link to={button.link} className="Slide__button">{button.text}</Link>;
    }
    else if (button && button.external) {
      displayButton = <a href={button.link} className="Slide__button">{button.text}</a>;
    }

    return (
      <section
        id={this.props.id}
        className={"Slide Slide_" + this.props.id + " " + this.props.className}
        // style={{backgroundImage: "url(" + this.state.bgSrc + ")"}}
      >
        {/* {displayTempImg} */}
        <div
          className={cx(
            'Slide__content', {
            'Slide__content_wide': this.props.wide,
            'Slide__content_bgLoaded': this.props.bgTemp }
          )}
        >
          {/* The parent component calling Slide can have its children
            * (title and body content) inserted here
            */}
          {this.props.children}

          {/* {displayHiddenImg} */}
          {displayButton}
        </div>
      </section>
    );
  }
}


export default Slide;
