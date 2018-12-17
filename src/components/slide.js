import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

/* ==================================================
 *  Styles
================================================== */
const StyledSlide = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  border: ${props => (props.noBorder ? 'none' : '24px solid white')};
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.2) 100%
  );
`
const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: white;
  /* outline: 4px solid springgreen; */
`
const Title = styled.h1`
  /* outline: 1px dotted palevioletred; */
`
const Body = styled.p`
  font-style: italic;
`

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
      <Overlay />
      <Content>
        <Title>{props.title}</Title>
        <Body>{props.children}</Body>
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
  // The position of the image. Centered by default.
  position: PropTypes.string,
  // Displays a slide without a border
  noBorder: PropTypes.bool,
}

Slide.defaultProps = {
  position: '50% 50%',
  noBorder: false,
}

/* ==================================================
 *  Queries
================================================== */

export default Slide
