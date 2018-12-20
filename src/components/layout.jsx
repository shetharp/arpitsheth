import React from "react";
import PropTypes from "prop-types";
import styled, { createGlobalStyle } from "styled-components";
import { mediaq } from "../utils/theme.js";

/* ==================================================
 *  Styles
================================================== */
/**
 * Typography.js should set the baseFontSize: '8px'.
 * Thus, 1rem = 8px which is consistent with our 8px grid.
 */
// font-size: 1rem    ~= 8px
// font-size: 2rem    ~= 16px
// font-size: 2.25rem ~= 18px
// font-size: 2.5rem  ~= 20px
// font-size: 2.75rem ~= 22px
// font-size: 3rem    ~= 24px
const GlobalResponsiveTypography = createGlobalStyle`
  body {
    font-size: 2rem;
    ${mediaq.xs`font-size: 2.25rem;`}
    ${mediaq.sm`font-size: 2.50rem;`}
    ${mediaq.md`font-size: 2.75rem;`}
    ${mediaq.lg`font-size: 3.00rem;`}
  }
`;

const StyledLayout = styled.main`
  /* margin-top: 80px; */
`;

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
  );
}

/* ==================================================
 *  Component Properties
================================================== */
Layout.propTypes = {};

Layout.defaultProps = {};

/* ==================================================
 *  Queries
================================================== */

export default Layout;
