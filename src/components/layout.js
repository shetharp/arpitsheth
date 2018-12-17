import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

/* ==================================================
 *  Styles
================================================== */
const GlobalResponsiveTypography = createGlobalStyle`
  ${'' /*
  font-size: 100%   ~= 16px
  font-size: 112.5% ~= 18px
  font-size: 125%   ~= 20px
  font-size: 137.5% ~= 22px
  font-size: 150%   ~= 24px
   */}
  html {
    font-size: 112.5%;
    @media screen and (min-width: 480px) {
      font-size: 125%;
    }
    @media screen and (min-width: 640px) {
      font-size: 137.5%;
    }
    @media screen and (min-width: 800px) {
      font-size: 150%;
    }
  }
`

const StyledLayout = styled.main`
  /* margin-top: 80px; */
`


/* ==================================================
 *  Render Component
================================================== */
/**
 * Creates a Slide which is a fullscreen section (height: 100vh; width: 100%)
 * with a background image, title, and body text.
 */
function Layout(props) {
//   console.log(props)
  return (
    <StyledLayout>
    <GlobalResponsiveTypography />
      {props.children}
    </StyledLayout>
  )
}

/* ==================================================
 *  Component Properties
================================================== */
Layout.propTypes = {

}

Layout.defaultProps = {

}

/* ==================================================
 *  Queries
================================================== */

export default Layout
