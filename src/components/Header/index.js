import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import StickyMenu from 'components/StickyMenu/'
import './Header.css';
import logo from 'img/as_logo.svg';

class Header extends Component {
  static propTypes = {
    transparent: PropTypes.bool 
  }
  static defaultProps = {
    transparent: false
  }
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <StickyMenu offset={50} cloneClass="Header">
        <div className={cx('Header', {'Header_transparent': this.props.transparent})}>
          <h1 className="Header-logo">
            <Link to='/'>
              <img src={logo} className="Header-logo__img" alt="Arpit Sheth"/>
            </Link>
          </h1>
          <nav className="Header-nav">
            <ul className="Header-nav__menu">
              {/*<li className="Header-nav__item"><Link to="/">Blog</Link></li>*/}
              <li className="Header-nav__item Header-nav__item_optional"><a href="https://instagram.com/shetharp">Instagram</a></li>
              <li className="Header-nav__item Header-nav__item_optional"><a href="https://linkedin.com/in/shetharp">LinkedIn</a></li>
              <li className="Header-nav__item"><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </StickyMenu>
    );
  }
}

export default Header;
