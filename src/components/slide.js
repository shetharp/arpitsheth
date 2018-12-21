import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import theme, { mediaq, breakp } from '../utils/theme';

console.log(theme.colors.primaryDark);
/* ==================================================
 *  Styles
================================================== */
const StyledSlide = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
  border: ${props => (props.isBorderless ? 'none' : '16px solid white')};
  margin-bottom: ${props => (props.isBorderless ? '0' : '-16px')};
  ${mediaq.xs_sm`min-height: ${breakp.sm_md}px;`}
  ${mediaq.sm`min-height: ${breakp.md}px;`}
  ${mediaq.sm_md`min-height: ${breakp.sm}px;`}

  ${mediaq.md`border-width: ${props => (props.isBorderless ? null : '24px')};`}
  ${mediaq.lg`border-width: ${props => (props.isBorderless ? null : '32px')};`}
  ${mediaq.xl`border-width: ${props => (props.isBorderless ? null : '40px')};`}

  ${mediaq.md`margin-bottom: ${props => (props.isBorderless ? '0' : '-24px')};`}
  ${mediaq.lg`margin-bottom: ${props => (props.isBorderless ? '0' : '-32px')};`}
  ${mediaq.xl`margin-bottom: ${props => (props.isBorderless ? '0' : '-40px')};`}
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: ${props => (props.isColorful ? rgba(props.overlay, 0.6) : rgba(props.overlay, 0.4))};
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 66.667%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  padding: 0 16px;
`;
// ${mediaq.xs`height: ${props => (props.isExpanded ? '70%' : null)};`}
// ${mediaq.md`padding: 0 24px`}
// ${mediaq.lg`height: ${props => (props.isExpanded ? '70%' : '60%')};`}
// ${mediaq.md`padding: 0 32px`}
const Body = styled.div``;
const Title = styled.h1`
  font-weight: normal;
`;
// /* font-size: 1.375rem; */
// /* ${mediaq.xxs`font-size: 6vw;`} */
// /* ${mediaq.xs`font-size: 1.5rem;`} Just reflow the text during awkward phase. */
// /* ${mediaq.lg`font-size: 3.6vw;`} */
// ${mediaq.xs`width: 75%;`}

// /* ${mediaq.xxs`font-size: 4vw;`} */
//   /* ${mediaq.xs`font-size: 1rem;`} Just reflow the text during awkward phase. */
//   /* ${mediaq.lg`font-size: 20px;`} */
//   ${mediaq.lg`line-height: 1.5;`}
//   ${mediaq.xs`padding-right: 48px;`}
const Description = styled.div`
  line-height: 1.375;

  a {
    transition: background-color 150ms ease;
  }
  a:hover {
    background: ${props => rgba(props.highlight, 0.6)};
  }
  em {
    font-style: normal;
    background: ${props => rgba(props.highlight, 0.6)};
  }
`;
const StyledButton = styled.a`
  background: white;
  color: #333333;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.2ch;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 48px;
  padding: 8px 16px;
  margin: 8px auto 16px auto;
  font-size: 14px;
`;
// ${mediaq.xs`width: 66.66%;`}
// ${mediaq.xs`margin: 8px auto 16px 0;`}
// ${mediaq.md`margin: 8px auto 24px 0;`}
// ${mediaq.md`margin: 8px auto 32px 0;`}
// ${mediaq.sm`font-size: 16px;`}
// ${mediaq.sm`width: 50%;`}

/* ==================================================
 *  Helpers
================================================== */
/**
 * Creates a button with some text and a link location.
 * The props should have text, link, and isExternal
 * Syntax: https://www.styled-components.com/docs/basics#extending-styles
 */
function Button({ text, link, isExternal }) {
  if (isExternal) {
    return (
      <StyledButton as="a" href={link}>
        {text}
      </StyledButton>
    );
  }
  return (
    <StyledButton as={Link} to={link}>
      {text}
    </StyledButton>
  );
}

/* ==================================================
 *  Render
================================================== */
/**
 * Creates a Slide which is a fullscreen section (height: 100vh; width: 100%)
 * with a background image, title, and body text.
 */
function Slide(props) {
  return (
    <StyledSlide {...props}>
      <Img
        fluid={props.fluid}
        alt=""
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
      <Overlay overlay={props.overlay} isColorful={props.isColorful} />
      <Content isExpanded={props.isExpanded}>
        <Body>
          <Title>{props.title}</Title>
          <Description highlight={props.highlight}>{props.descr}</Description>
        </Body>

        {/* If this Slide has a button property, render a button */
        /* Pass down the button prop from Slide to Button.
         * Also pass down the className prop so that we can style the component */}
        {props.button && <Button {...props.button} />}
      </Content>
    </StyledSlide>
  );
}

/* ==================================================
 *  Properties
================================================== */
Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isExternal: PropTypes.bool.isRequired,
};

Slide.propTypes = {
  // The ID used in the HTML prop for linking
  id: PropTypes.string.isRequired,
  // The title text
  title: PropTypes.string,
  // The description wrapped in a React/HTML element, preferably <p>
  descr: PropTypes.element,
  // The fluid image data for gatsby-image
  fluid: PropTypes.object,
  // The Overlay color in #000fff format
  overlay: PropTypes.string,
  // The Highlight color used for links and <em>
  highlight: PropTypes.string,
  // If the Overlay color should be colorful and strong
  isColorful: PropTypes.bool,
  // Expands the slide content area to fit more text
  isExpanded: PropTypes.bool,
  // The position of the image in CSS object-position format
  position: PropTypes.string,
  // A Button with text, link location, and indicator if the link is external
  button: PropTypes.shape(Button.propTypes),
  // Displays a slide without a border
  isBorderless: PropTypes.bool,
};

Slide.defaultProps = {
  overlay: '#000000',
  highlight: '#000000',
  isColorful: false,
  isExpanded: false,
  position: '50% 50%',
  isBorderless: false,
};

/* ==================================================
 *  Queries
================================================== */

export default Slide;
