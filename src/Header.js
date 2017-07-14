import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="site-logo"><Link to='/'>Arpit Sheth</Link></h1>
      </div>
    );
  }
}

export default Header;
