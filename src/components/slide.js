import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

/**
 * Creates a Slide which is a fullscreen section (height: 100vh; width: 100%)
 * with a background image, title, and body text.
 */
function Slide(props) {
  return (
    <section
      css={`
        display: flex;
        width: 100%;
        height: 100vh;
      `}
    >
      <Img
        fluid={props.fluid}
        // This CSS allows the image to be full screen.
        // https://github.com/gatsbyjs/gatsby/issues/2470#issuecomment-338394370
        css={`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          z-index: -1;

          // Reposition the underlying images based on props (Optional)
          img {
            object-fit: cover !important;
            object-position: ${props.position} !important;
          }
        `}
      />
    </section>
  )
}

Slide.PropTypes = {
  // The fluid image data for gatsby-image
  fluid: PropTypes.object,
  // The position of the image. Centered by default.
  position: PropTypes.string,
}

Slide.defaultProps = {
  position: '50% 50%',
}

export default Slide
