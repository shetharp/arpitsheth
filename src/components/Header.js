import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';
import theme, { mediaq, breakp } from '../utils/theme';
import iMenuWhite from '../images/i-menu.svg';
import logoBlack from '../images/as-logo-black.svg';
import logoWhite from '../images/as-logo-white.svg';

/* ==================================================
 *  Styles
================================================== */
const StyledHeader = styled.header`
  color: white;
  position: absolute;
  position: fixed;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
  ${mediaq.lg`background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%);`}
`;

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

const Nav = styled.nav`
  color: inherit;
  display: flex;
  flex-direction: row-reverse;
  overflow: hidden;
  height: 56px;
  ${mediaq.md`height: 64px;`}
  ${mediaq.md`height: 80px;`}
`;

const MenuToggle = styled.i`
  cursor: pointer;
  display: flex;
  align-items: stretch;
  font-size: 0;
  margin: 0;
  padding: 16px;
  ${mediaq.md`padding: 16px 24px;`}
  ${mediaq.lg`padding: 24px 32px;`}
  ${mediaq.lg`padding: 24px 40px;`}
  img {
    width: 16px;
    ${mediaq.md`width: 24px;`}
  }
`;

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
  align-items: center;
  margin: 0;
  margin-left: 16px;
  ${mediaq.md`margin-left: 24px;`}
  ${mediaq.lg`margin-left: 32px;`}
  ${mediaq.xl`margin-left: 40px;`}

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

/* ==================================================
 *  Helpers
================================================== */

/* ==================================================
 *  Render
================================================== */
function Header(props) {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo>
          <img src={logoWhite} alt="Arpit Sheth" />
        </Logo>
      </Link>

      <Nav>
        <MenuToggle>
          <img src={iMenuWhite} alt="Show Menu" />
        </MenuToggle>
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
    </StyledHeader>
  );
}
/* ==================================================
 *  Properties
================================================== */

/* ==================================================
 *  Queries
================================================== */

export default Header;
