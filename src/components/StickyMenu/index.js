import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StickyMenu.css';
/* Modified from: https://stackoverflow.com/a/33555276 */

class StickyMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPinned: false
    };
    // Example how to bind object in React ES6
    this.handleScroll = this.handleScroll.bind(this);
  }

  static propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    offset: PropTypes.number,
    cloneClass: PropTypes.string,
  }

  static defaultProps = {
    offset: 50,
    cloneClass: "StickyClone",
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > this.props.offset) {
      this.setState({
        isPinned: true
      });
    } else if (window.scrollY < this.props.offset) {
      this.setState({
        isPinned: false
      });
    }
  }

  render() {
    const Child = React.Children.only(this.props.children);
    const propsToPass = { className: "StickyMenu__" + this.props.cloneClass + " " + this.props.cloneClass }
    return (
      <div>
        {this.props.children}
        <div className={"StickyMenu" + (this.state.isPinned ? " StickyMenu_pinned" : "")}>
          {React.cloneElement(Child, propsToPass)}
        </div>
      </div>
    );
  }
}

export default StickyMenu;
