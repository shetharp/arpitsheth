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
  ${mediaq.xs_sm`min-height: ${breakp.xs}px;`}
  ${mediaq.sm`min-height: ${breakp.sm}px;`}
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
  background: ${props =>
    props.isColorful
      ? `linear-gradient(175deg, ${rgba(props.overlay, 0.4)} 0%, ${rgba(
          props.overlay,
          0.8
        )} 50%, ${rgba(props.overlay, 0.9)} 100%)`
      : `linear-gradient(175deg, ${rgba(props.overlay, 0.0)} 0%, ${rgba(
          props.overlay,
          0.6
        )} 50%, ${rgba(props.overlay, 0.9)} 100%)`};
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  /* Test with height: 75% for clipping. */
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  padding: 16px;
  ${mediaq.md`padding: 24px`}
  ${mediaq.lg`padding: 32px`}
  ${mediaq.xl`padding: 40px`}
`;

const Body = styled.div``;

const Title = styled.h1`
  font-weight: normal;
  font-size: ${theme.typeScale ** 3}em;
  ${mediaq.xs`font-size: ${theme.typeScale ** 2}em;`}
  ${mediaq.sm`font-size: ${theme.typeScale ** 3}em;`}
  ${mediaq.lg`font-size: ${theme.typeScale ** 4}em;`}
  ${mediaq.xl`font-size: ${theme.typeScale ** 6}em;`}
  ${mediaq.xxl`font-size: ${theme.typeScale ** 7}em;`}
  ${mediaq.huge`font-size: ${theme.typeScale ** 8}em;`}
  width: 100%;
  ${mediaq.xs`width: ${props => (props.isExpanded ? '100%' : '75%')};`}
  ${mediaq.sm`width: ${props => (props.isExpanded ? '90%' : '66.667%')};`}
  ${mediaq.sm`width: ${props => (props.isExpanded ? '90%' : '75%')};`}
  ${mediaq.lg`width: ${props => (props.isExpanded ? '100%' : '66.667%')};`}
  ${mediaq.xl`width: ${props => (props.isExpanded ? '100%' : '66.667%')};`}
  ${mediaq.xxl`width: ${props => (props.isExpanded ? '90%' : '66.667%')};`}
  ${mediaq.huge`width: ${props => (props.isExpanded ? '90%' : '66.667%')};`}
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 1.6rem;
  ${mediaq.xs`font-size: 1.8rem;`}     
  ${mediaq.sm`font-size: 2.0rem;`}     
  ${mediaq.md`font-size: 2.0rem;`}     
  ${mediaq.lg`font-size: 2.2rem;`}  
  ${mediaq.xl`font-size: 2.4rem;`}  
  width: 100%;
  ${mediaq.sm`width: 85%;`}
  ${mediaq.md`width: ${props => (props.isExpanded ? '90%' : '75%')};`}
  ${mediaq.lg`width: 66.667%;`}
  ${mediaq.xl`width: 50%;`}

  a {
    text-decoration: none;
    border-bottom: 1px solid rgba(255,255,255,0.5);
    ${mediaq.md`border-width: 2px;`}  
    transition: background-color 150ms ease;
  }
  a:hover {
    background: ${props => rgba(props.highlight, 0.5)};
  }
  em {
    font-style: normal;
    background: ${props => rgba(props.highlight, 0.5)};
  }
`;

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: #333333;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.2ch;
  padding: 8px 16px;
  min-height: 48px;
  width: 100%;
  ${mediaq.xs`width: 66.66%;`}
  ${mediaq.sm`width: 50%;`}
  ${mediaq.lg`width: 33.333%;`}
  ${mediaq.xxl`width: 25%;`}
  margin: 0 auto;
  ${mediaq.xs`margin-left: 0;`}
  font-size: 1.4rem;
  ${mediaq.lg`font-size: 1.6rem;`}
`;

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
  const btn = props.button;
  const hasBtn = typeof btn === 'undefined' ? false : true;
  return (
    <StyledSlide isBorderless={props.isBorderless}>
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
      <Content isExpanded={props.isExpanded} hasBtn={hasBtn}>
        <Body>
          <Title isExpanded={props.isExpanded}>{props.title}</Title>
          <Description isExpanded={props.isExpanded} highlight={props.highlight}>
            {props.descr}
          </Description>
        </Body>

        {/* If this Slide has a button property, render a button */
        /* Pass down the button prop from Slide to Button.
         * Also pass down the className prop so that we can style the component */}
        {hasBtn && <Button {...props.button} />}
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

Button.defaultProps = {
  text: '',
  link: '',
  isExternal: false,
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
