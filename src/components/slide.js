import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

/* ==================================================
 *  Styles
================================================== */
const StyledSlide = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
  border: ${props => (props.noBorder ? 'none' : '16px solid white')};
  margin-bottom: ${props => (props.noBorder ? '0' : '-16px')};
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: ${props => rgba(props.overlayBg, 0.4)};
  /* background: linear-gradient(
    175deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 0.8) 50%,
    rgba(0, 0, 0, 0.8) 80%,
    rgba(0, 0, 0, 0) 100%
  ); */
`
const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;
  color: white;
  /* border: 4px solid springgreen; */
`
const Body = styled.div`
    /* outline: 4px dotted palevioletred; */
`
const Title = styled.h1`
  font-size: 1.375rem;
  font-weight: normal;
  /* outline: 1px dotted palevioletred; */
`
const Description = styled.p`
  /* font-style: italic; */
  line-height: 1.375;
`

/* ==================================================
 *  Helper Components
================================================== */
/**
 * Creates a button with some text and a link location.
 * The props should have text, link, and isExternal
 */
function Button(props) {
  if (props.isExternal) {
    return (
      <a href={props.link} className={props.className}>
        {props.text}
      </a>
    )
  } else {
    return (
      <Link to={props.link} className={props.className}>
        {props.text}
      </Link>
    )
  }
}

/* ==================================================
 *  Render Component
================================================== */
/**
 * Creates a Slide which is a fullscreen section (height: 100vh; width: 100%)
 * with a background image, title, and body text.
 */
function Slide(props) {
  console.log(props)
  return (
    <StyledSlide {...props}>
      <Img
        fluid={props.fluid}
        // This CSS allows the image to be full screen.
        // https://github.com/gatsbyjs/gatsby/issues/2470#issuecomment-338394370
        css={`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;

          // Reposition the underlying images based on props (Optional)
          img {
            object-fit: cover !important;
            object-position: ${props.position} !important;
          }
        `}
      />
      <Overlay overlayBg={props.overlay}/>
      <Content>
        <Body>
          <Title>{props.title}</Title>
          <Description>{props.children}</Description>
        </Body>

        {/* If this Slide has a button property, render a button */
        /* Pass down the button prop from Slide to Button.
         * Also pass down the className prop so that we can style the component */}
        {props.button && (
          <Button
            {...props.button}
            className={props.className}
            css="
          background: white;
          color: #333333;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.2ch;
          font-size: 0.8rem;
          display: block;
          width: 100%;
          padding: 8px 16px;
          margin: 16px auto;
          "
          />
        )}
      </Content>
    </StyledSlide>
  )
}

/* ==================================================
 *  Component Properties
================================================== */
Slide.propTypes = {
  // The Slide Title
  title: PropTypes.string,
  // The fluid image data for gatsby-image
  fluid: PropTypes.object,
  // The position of the image. Centered by default
  position: PropTypes.string,
  // The Overlay color as #HEX or "none"
  overlay: PropTypes.string,
  // A Button with text, link location, and indicator if the link is external
  button: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isExternal: PropTypes.bool.isRequired,
  }),
  // Displays a slide without a border
  noBorder: PropTypes.bool,
}

Slide.defaultProps = {
  position: '50% 50%',
  overlay: '#000000',
  noBorder: false,
}

/* ==================================================
 *  Queries
================================================== */

export default Slide
