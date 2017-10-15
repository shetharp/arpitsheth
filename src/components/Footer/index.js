import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './Footer.css';

class Footer extends Component {
  static propTypes = {
  }
  static defaultProps = {
  }
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <footer className="Footer">
        &copy; {new Date().getFullYear()} Arpit Sheth
      </footer>
    );
  }
}

export default Footer;
