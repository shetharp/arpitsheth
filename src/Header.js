import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="site-logo"><Link to='/'>Arpit Sheth</Link></h1>
        <nav className="site-nav">
          <ul>
            <li className="site-nav__item"><Link to="/">Blog</Link></li>
            <li className="site-nav__item hidden-xxs"><Link to="/">LinkedIn</Link></li>
            <li className="site-nav__item"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
