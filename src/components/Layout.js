import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import theme, { mediaq } from '../utils/theme.js';
import Header from '../components/Header';
import footerBgXS from '../images/footer-bg@xs.png';
import footerBgMD from '../images/footer-bg@md.png';
import footerBgXL from '../images/footer-bg@xl.png';

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
  body.disableScroll {
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
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
    height: 0.2rem;
    background: ${theme.colors.secondaryDark};
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
    margin: 1em 0 ${theme.typeScale ** -5}em 0;
  }
  h2 {
    font-size: ${theme.typeScale ** 4}em;
    margin: 1em 0 ${theme.typeScale ** -4}em 0;
  }
  h3 {
    font-size: ${theme.typeScale ** 3}em;
    margin: 1em 0 ${theme.typeScale ** -3}em 0;
  }
  h4 {
    font-size: ${theme.typeScale ** 2}em;
    margin: 1em 0 ${theme.typeScale ** -2}em 0;
  }
  h5 {
    font-size: ${theme.typeScale ** 1}em;
    margin: 1em 0 ${theme.typeScale ** -1}em 0;
  }
  h6 {
    font-size: ${theme.typeScale ** 0}em;
    margin: 1em 0 ${theme.typeScale ** 0}em 0;
  }
`;

const StyledLayout = styled.main`
  /* Allows the footer to always snap to the bottom of the screen */
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  max-width: 800px;
  margin: 0 16px;
  ${mediaq.md`margin: 0 24px;`}
  ${mediaq.lg`margin: 0 auto;`}
`;

const Footer = styled.footer`
/* outline: 1px dotted mediumaquamarine; */
  color: ${theme.colors.primaryLite};
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 40px;

  padding: 16px;
  ${mediaq.md`padding: 24px;`}
  ${mediaq.lg`padding: 32px;`}
  ${mediaq.xl`padding: 40px;`}

  background: white url(${footerBgXS}) center top / auto no-repeat;
  ${mediaq.md`background-image: url(${footerBgMD});`}
  ${mediaq.xl`background-image: url(${footerBgXL});`}

  height: 160px;
  ${mediaq.md`height: 240px;`}
  ${mediaq.xl`height: 360px;`}

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
function Layout({ children, hasTransparentHeader, hasStickyHeader, hasContainer, hasFooter }) {
  const layoutContent = hasContainer ? <Container>{children}</Container> : children;
  return (
    <StyledLayout>
      <GlobalResponsiveTypography />
      <Header isTransparent={hasTransparentHeader} hasStickyHeader={hasStickyHeader} />
      {layoutContent}
      {hasFooter && (
        <Footer>
          Thanks for visiting.&nbsp;
          <Link to="/contact">Say hello!</Link>
        </Footer>
      )}
    </StyledLayout>
  );
}

/* ==================================================
 *  Component Properties
================================================== */
Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  hasTransparentHeader: PropTypes.bool,
  hasStickyHeader: PropTypes.bool,
  hasContainer: PropTypes.bool,
  hasFooter: PropTypes.bool,
};

Layout.defaultProps = {
  hasTransparentHeader: false,
  hasStickyHeader: true,
  hasContainer: true,
  hasFooter: true,
};

/* ==================================================
 *  Queries
================================================== */

export default Layout;
