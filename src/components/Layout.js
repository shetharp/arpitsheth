import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import theme, { mediaq } from '../utils/theme.js';

/* ==================================================
 *  Styles
================================================== */
/**
 * Usually the default font-size on browsers is 16px.
 * By setting <html> font-size to 62.5% makes the root <html> font-size to 10px on most screens.
 * This lets us use 1px = 0.1rem and 10px = 1rem
 */

const GlobalResponsiveTypography = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    font-family: ${theme.fonts.body};
    font-weight: 300;
    line-height: 1.5;
    color: ${theme.colors.primary};
    padding: 0;
    margin: 0;
    ${mediaq.xs`font-size: 1.8rem;`}     
    ${mediaq.sm`font-size: 2.0rem;`}     
    ${mediaq.md`font-size: 2.2rem;`}     
    ${mediaq.lg`font-size: 2.4rem;`}     
  }
  a {
    color: inherit;
  }
  strong, b {
    font-weight: 500;
  }
  p, ul, li, hr, blockquote {
    margin: 0;
    margin-bottom: 1em;
  }
  hr {
    border: none;
    height: 0.1rem;
    background: ${theme.colors.primaryLite};
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 700;
    line-height: 1.1;
  }
  ${'' /* Scale up the font-size, but maintain the the same margins.*/}
  ${'' /* With a typeScale of 1.148698355, the h1 will be double the paragraph font size. */}
  ${'' /* With a typeScale of 1.148698355, the margins will be equal to the paragraph font size.*/}
  h1 {
    font-size: ${theme.typeScale ** 5}em;
    margin: ${theme.typeScale ** -5}em 0;
  }
  h2 {
    font-size: ${theme.typeScale ** 4}em;
    margin: ${theme.typeScale ** -4}em 0;
  }
  h3 {
    font-size: ${theme.typeScale ** 3}em;
    margin: ${theme.typeScale ** -3}em 0;
  }
  h4 {
    font-size: ${theme.typeScale ** 2}em;
    margin: ${theme.typeScale ** -2}em 0;
  }
  h5 {
    font-size: ${theme.typeScale ** 1}em;
    margin: ${theme.typeScale ** -1}em 0;
  }
  h6 {
    font-size: ${theme.typeScale ** 0}em;
    margin: ${theme.typeScale ** 0}em 0;
  }
`;

const StyledLayout = styled.main`
  /* margin-top: 80px; */
`;

/* ==================================================
 *  Helpers
================================================== */

/* ==================================================
 *  Render Component
================================================== */
/**
 * Creates a Slide which is a fullscreen section (height: 100vh; width: 100%)
 * with a background image, title, and body text.
 */
function Layout({ children }) {
  //   console.log(props)
  return (
    <StyledLayout>
      <GlobalResponsiveTypography />
      {children}
    </StyledLayout>
  );
}

/* ==================================================
 *  Component Properties
================================================== */
Layout.propTypes = {
  children: PropTypes.array,
};

Layout.defaultProps = {};

/* ==================================================
 *  Queries
================================================== */

export default Layout;
