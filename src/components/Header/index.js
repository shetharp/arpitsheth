import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import StickyMenu from 'components/StickyMenu/'
import './Header.css';
import logo from 'img/as_logo.svg';

class Header extends Component {
  render() {
    return (
      <StickyMenu offset={300}>
        <div className="Header">
          <h1 className="site-logo"><Link to='/'><img src={logo} className="site-logo__img" alt="Arpit Sheth"></img></Link></h1>
          <nav className="site-nav">
            <ul>
              <li className="site-nav__item"><Link to="/">Blog</Link></li>
              <li className="site-nav__item site-nav__item_optional"><Link to="/">LinkedIn</Link></li>
              <li className="site-nav__item"><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </StickyMenu>
    );
  }
}

export default Header;
