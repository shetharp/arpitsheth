import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';
import theme, { mediaq } from '../utils/theme';
import logoBlack from '../images/as-logo-black.svg';
import logoWhite from '../images/as-logo-white.svg';
import iMenuDark from '../images/i-menu-dark.svg';
import iMenuLite from '../images/i-menu-lite.svg';
import iCloseDark from '../images/i-close-dark.svg';
import iCloseLite from '../images/i-close-lite.svg';
import headerBgXS from '../images/header-bg@xs.png';
import headerBgSM from '../images/header-bg@sm.png';
import headerBgMD from '../images/header-bg@md.png';
import headerBgLG from '../images/header-bg@lg.png';

/**
 * Search for "ENTER DATA HERE" to quickly jump to areas where
 * you may need to update data frequently. (Such as header links).
 *
 * I tried using the 'react-headroom' component, but it was buggy so I decided against it.
 * Although not applicable for <StickyHeader> and <ExpandedHeader>, consider taking a look at the
 * position: sticky property in CSS in the future to avoid using javascript for an element that
 * should be initially static, but then become positioned fixed once you scroll up to it.
 */

/* ==================================================
 *  Styles
================================================== */

/* --------------------------------------------------
 *  Styles / Header
-------------------------------------------------- */
/**
 * This is the initial wrapper for the main header.
 * It is primarily responsible for handling isTransparent
 * If the isTransparent prop is true, make the logo, menu toggle icon, and text color white
 * Else, give the header a solid white background with a black(ish) logo, menu toggle icon, and text color
 */
const StyledHeader = styled.header`
  position: ${props => (props.isTransparent ? 'absolute' : 'relative')};
  background: ${props =>
    props.isTransparent
      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)`
      : 'white'};
  ${mediaq.md`background: ${props =>
    props.isTransparent
      ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)'
      : 'white'};`}

  color: ${props => (props.isTransparent ? theme.colors.secondary : theme.colors.primary)};
  a {
    color: inherit;
  }
  a:hover {
    color: ${props =>
      props.isTransparent ? theme.colors.secondaryLite : theme.colors.primaryDark};
  }
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 9999;
`;

/* --------------------------------------------------
 *  Styles / Header Wrappers
-------------------------------------------------- */
/**
 * The StickyHeader wrapper should be used around a StyledHeader element
 * The StickyHeader ensures that the header only shows when you scroll up.
 * Otherwise, we hide it by translating it off the top of the viewport.
 */
const StickyHeader = styled.div`
  width: 100%;
  position: fixed;
  z-index: 9999;
  top: 0;
  transform: ${props => (props.isSticky ? 'translate3D(0,0,0)' : 'translate3D(0,-100%,0)')};
  opacity: ${props => (props.isSticky ? 1 : 0)};
  transition: all 300ms ease;
`;

/**
 * The ExpandedHeader wrapper should be used around a StyledHeader element
 * The ExpandedHeader shows a fullscreen navigation menu when the toggle menu icon is clicked.
 * The ExpandedHeader is designed to be used with the corresponding ExpandedNav element (below)
 */
const animExpandedHeader = keyframes`
0% {
  opacity: 0;
  height: 20vh;
}
100% {
  opacity: 1;
  height: 100vh;
}
`;

const ExpandedHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  animation: ${animExpandedHeader} 500ms ease-out;
  background: white url(${headerBgXS}) center bottom / contain repeat-x;
  ${mediaq.sm`background-image: url(${headerBgSM});`}
  ${mediaq.md`background-image: url(${headerBgMD});`}
  ${mediaq.lg`background-image: url(${headerBgLG});`}


  ${StyledHeader} {
    /* background: transparent; */
  }
`;

/* --------------------------------------------------
 *  Styles / Header / Logo
-------------------------------------------------- */
const Logo = styled.h1`
  font-size: 0;
  margin: 0;
  padding: 16px;
  ${mediaq.md`padding: 16px 24px;`}
  ${mediaq.lg`padding: 24px 32px;`}
  ${mediaq.lg`padding: 24px 40px;`}
  img {
    height: 24px;
    ${mediaq.md`height: 32px;`}
  }
`;

/* --------------------------------------------------
 *  Styles / Header / HeaderToggleIcon
-------------------------------------------------- */
const HeaderToggleIcon = styled.i`
  cursor: pointer;
  display: flex;
  align-items: stretch;
  font-size: 0;
  margin: 0;
  padding: 16px;
  ${mediaq.md`padding: 16px 24px;`}
  ${mediaq.lg`padding: 24px 32px;`}
  ${mediaq.xl`padding: 24px 40px;`}
  height: 56px;
  ${mediaq.md`height: 64px;`}
  ${mediaq.lg`height: 80px;`}
  
  img {
    width: 16px;
    ${mediaq.md`width: 24px;`}
  }
`;

/* --------------------------------------------------
 *  Styles / Header / Nav
-------------------------------------------------- */
/**
 * Nav wraps the Menu and sets the height for the Menu to fill
 */
const Nav = styled.nav`
  color: inherit;
  display: flex;
  flex-direction: row-reverse;
  overflow: hidden;
  flex: 1 0 auto;
  height: 56px;
  ${mediaq.md`height: 64px;`}
  ${mediaq.md`height: 80px;`}
`;

/**
 * Menu holds the MenuItems which typically contain links.
 * Menu is initially hidden on mobile (so that we can take advantage
 * of the ExpandedHeader).
 * ---
 * NOTE: These styles are used as the basis for Menu and MenuItem
 * in ExpandedNav which is used in ExpandedHeader
 */
const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: ${theme.typeScale ** -2}em;
  text-transform: uppercase;
  letter-spacing: 0.2ch;

  display: flex;
  flex-wrap: no-wrap;
  justify-content: flex-end;
  align-items: stretch;
  display: none;
  ${mediaq.xs_sm`display: flex;`}
  ${mediaq.lg`font-weight: 500;`}
`;

const MenuItem = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  margin-left: 16px;
  ${mediaq.md`margin-left: 24px;`}
  ${mediaq.lg`margin-left: 32px;`}
  ${mediaq.xl`margin-left: 40px;`}

  a {
    text-decoration: none;
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

/* --------------------------------------------------
 *  Styles / ExpandedHeader / ExpandedNavStyles
-------------------------------------------------- */
/**
 * The ExpandedNavStyles displays a fullscreen menu in the header
 * ExpandedNavStyles requires ExpandedHeader to be its parent
 * ExpandedNavStyles does not alter the HeaderLogo or HeaderToggle
 * ExpandedNavStyles uses the same Menu and MenuItems from above,
 * but adds a few alterations to the style.
 */
const ExpandedNavStyles = styled.nav`
  /* flex: 1 0 auto; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${Menu} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    align-content: stretch;
    height: 50%;
    width: 100%;
    font-size: 1em;
    font-weight: 500;
  }

  ${MenuItem} {
    min-height: 2em;
    margin-left: 0;
    align-items: center;
    a {
      transform: scale(1);
      transition: all 300ms ease-out;
    }
    a:hover {
      transform: scale(1.333);
      ${mediaq.lg`font-weight: bold;`}
    }
  }
`;

/* ==================================================
 *  Helpers
================================================== */
/* --------------------------------------------------
 *  Helpers / HeaderLogo
-------------------------------------------------- */
/**
 * Creates a Header Logo in either white or black
 */
function HeaderLogo({ isWhite }) {
  if (isWhite) {
    return (
      <Link to="/">
        <Logo>
          <img src={logoWhite} alt="Arpit Sheth" />
        </Logo>
      </Link>
    );
  }
  return (
    <Link to="/">
      <Logo>
        <img src={logoBlack} alt="Arpit Sheth" />
      </Logo>
    </Link>
  );
}

HeaderLogo.propTypes = {
  isWhite: PropTypes.bool,
};
HeaderLogo.defaultProps = {
  isWhite: false,
};

/* --------------------------------------------------
 *  Helpers / HeaderToggle
-------------------------------------------------- */
/**
 * Creates a HeaderToggleIcon to show/hide the ExpandedHeader
 * Requires a onClick function handler
 * The onClick handler should set the isExpanded state in the Header component class
 * The onClick handler should also set the '.disableScroll' class in <body> to prevent
 * scrolling when the fullscreen ExpandedHeader is shown.
 */
function HeaderToggle({ onClick, isWhite, isExpanded }) {
  if (isExpanded && isWhite) {
    return (
      <HeaderToggleIcon onClick={onClick}>
        <img src={iCloseLite} alt="Toggle Menu" />
      </HeaderToggleIcon>
    );
  } else if (isExpanded && !isWhite) {
    return (
      <HeaderToggleIcon onClick={onClick}>
        <img src={iCloseDark} alt="Toggle Menu" />
      </HeaderToggleIcon>
    );
  } else if (!isExpanded && isWhite) {
    return (
      <HeaderToggleIcon onClick={onClick}>
        <img src={iMenuLite} alt="Toggle Menu" />
      </HeaderToggleIcon>
    );
  } else {
    return (
      <HeaderToggleIcon onClick={onClick}>
        <img src={iMenuDark} alt="Toggle Menu" />
      </HeaderToggleIcon>
    );
  }
}

HeaderToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  isWhite: PropTypes.bool,
};
HeaderToggle.defaultProps = {
  isWhite: false,
};

/* --------------------------------------------------
 *  Helpers / HeaderNav
-------------------------------------------------- */
/**
 * ENTER DATA HERE
 * HeaderNav creates the header links that are seen in the standard top header.
 * These links may not be visible on mobile devices.
 * These links are not copied over to the ExpandedHeader or ExpandedNav
 * Use <Link> for links within the site or <a> for external links.
 * Try to keep the number of links limited to less than 5. Preferably 3.
 */
function HeaderNav(props) {
  return (
    <Nav>
      <Menu>
        <MenuItem>
          <a href="https://www.instagram.com/shetharp/">Photography</a>
        </MenuItem>
        <MenuItem>
          <a href="https://www.linkedin.com/in/shetharp/">LinkedIn</a>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact</Link>
        </MenuItem>
      </Menu>
    </Nav>
  );
}

/* --------------------------------------------------
 *  Helpers / ExpandedNav
-------------------------------------------------- */
/**
 * ENTER DATA HERE
 * ExpandedNav creates an extended list of header links that are shown in the ExpandedHeader
 * Although this uses <Menu> and <MenuItem> elements, these styles have been modified with <ExpandedNavStyles>
 * These links are not automatically copied over to the HeaderNav
 * If you have ExpandedNav links that are different from HeaderNav, you will want to
 * ensure that ExpandedNavStyles is visible across all responsive screen sizes.
 * Use <Link> for links within the site or <a> for external links.
 */
function ExpandedNav(props) {
  return (
    <ExpandedNavStyles>
      <Menu>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>
          <a href="https://www.instagram.com/shetharp/">Photography</a>
        </MenuItem>
        <MenuItem>
          <a href="https://www.linkedin.com/in/shetharp/">LinkedIn</a>
        </MenuItem>
        <MenuItem>
          <Link to="/contact">Contact</Link>
        </MenuItem>
      </Menu>
    </ExpandedNavStyles>
  );
}

/* ==================================================
 *  Render / Header
================================================== */
/**
 * The Header component manages the primary header as well as several header wrappers.
 * While the header wrappers will appear cohesive and consistent with the primary header,
 * the header wrappers add additional functionality. These header wrappers generally create
 * copies of the primary header subcomponents.
 *
 * Properties:
 * ---
 * isTransparent - Uses absolute positioning to place the header on top of a background. Also used to determine the color of the logo, text, and icons.
 * hasStickyHeader - Creates a StickyHeader by copying the primary header and only showing this new StickyHeader only when you scroll up
 * stickyOffset - Don't show the StickyHeader if you haven't scrolled below X pixels from the top
 *
 * State:
 * ---
 * isSticky - Display the StickyHeader
 * isExpanded - Desplay the ExpandedHeader and prevent scrolling
 * lastKnownScrollY - The pixel value from the top of the page that we have scrolled down to. Used to determine isSticky.
 * isTransparent - (Not Implemented) Used to change the transparency of the header and color of the logo, text, and icons in realtime.
 *
 * Methods
 * ---
 * handleStickyHeader() - Watches lastKnownScrollY to determine if the <StickyHeader> should be shown. Shows <StickyHeader> if we're scrolling up, else hides it.
 * toggleExpandedHeader() - Responds to clicks from <HeaderToggle> to show/hide <ExpandedHeader> and disable scrolling on <body> with the ".disableScroll" class when <ExpandedHeader> is shown.
 */

class Header extends React.Component {
  static propTypes = {
    isTransparent: PropTypes.bool,
    hasStickyHeader: PropTypes.bool,
    stickyOffset: PropTypes.number,
  };
  static defaultProps = {
    isTransparent: false,
    hasStickyHeader: false,
    stickyOffset: 100,
  };

  constructor(props) {
    super(props);
    this.state = {
      isSticky: false,
      isExpanded: false,
      lastKnownScrollY: 0,
      // isTransparent: this.props.isTransparent,
    };
    this.handleStickyHeader = this.handleStickyHeader.bind(this);
    this.toggleExpandedHeader = this.toggleExpandedHeader.bind(this);
  }

  /* --------------------------------------------------
   *  Render / Header / handleStickyHeader()
  -------------------------------------------------- */
  componentDidMount() {
    window.addEventListener('scroll', this.handleStickyHeader);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleStickyHeader);
  }

  handleStickyHeader() {
    if (window.scrollY <= this.props.stickyOffset || window.scrollY > this.state.lastKnownScrollY) {
      // We're either in the offset zone near the top of the page or we're scrolling down...
      // Hide the <StickyHeader> and update the lastKnownScrollY
      this.setState({
        isSticky: false,
        lastKnownScrollY: window.scrollY,
      });
    } else {
      // Scrolling Up!!!
      // Show the <StickyHeader> and update the lastKnownScrollY
      this.setState({
        isSticky: true,
        lastKnownScrollY: window.scrollY,
      });
    }
  }

  /* --------------------------------------------------
   *  Render / Header / toggleExpandedHeader()
  -------------------------------------------------- */
  toggleExpandedHeader() {
    // If the <ExpandedHeader> is shown, disable scrolling on the <body> with the ".disableScroll" class
    // The ".disableScroll" class should be written wherever Global Styles are declared (see Layout.js)
    !this.state.isExpanded
      ? document.body.classList.add('disableScroll')
      : document.body.classList.remove('disableScroll');

    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  /* --------------------------------------------------
   *  Render / Header / render()
  -------------------------------------------------- */
  render() {
    return (
      <>
        {/* The primary header */}
        <StyledHeader isTransparent={this.props.isTransparent}>
          <HeaderLogo isWhite={this.props.isTransparent} />
          <HeaderNav />
          <HeaderToggle
            onClick={this.toggleExpandedHeader}
            isWhite={this.props.isTransparent}
            isExpanded={this.state.isExpanded}
          />
        </StyledHeader>

        {/* The <StickyHeader> is only rendered if the hasStickyHeader prop in Header is true. */}
        {/* The <StickyHeader> is shown when the isSticky state is true. This occurs when you scroll up. */}
        {/* It uses the same <HeaderNav> as the primary header. */}
        {/* However, the background is white and the logo, icon, and text are black(ish). */}
        {this.props.hasStickyHeader && (
          <StickyHeader isSticky={this.state.isSticky}>
            <StyledHeader>
              <HeaderLogo />
              <HeaderNav />
              <HeaderToggle
                onClick={this.toggleExpandedHeader}
                isExpanded={this.state.isExpanded}
              />
            </StyledHeader>
          </StickyHeader>
        )}

        {/* The <ExpandedHeader> is only rendered when the isExpanded state is true. */}
        {/* This occurs when the <HeaderToggle> icon is clicked. */}
        {/* The <ExpandedHeader> DOES NOT use <HeaderNav> from the primary header. */}
        {/* Instead, this renders the <ExpandedNav> links in full screen format. */}
        {this.state.isExpanded && (
          <ExpandedHeader isExpanded={this.state.isExpanded}>
            <StyledHeader>
              <HeaderLogo isWhite={false} />
              <HeaderToggle
                onClick={this.toggleExpandedHeader}
                isWhite={false}
                isExpanded={this.state.isExpanded}
              />
            </StyledHeader>
            <ExpandedNav />
          </ExpandedHeader>
        )}
      </>
    );
  }
}

/* ==================================================
 *  Queries
================================================== */

export default Header;
