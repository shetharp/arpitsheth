import React, { Component } from 'react';
{/*Source: https://stackoverflow.com/a/33555276 */}

class Sticky extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      scrollingLock: false
    };
    // example how to bind object in React ES6
    this.handleScroll = this.handleScroll.bind(this)
}

componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll() {

  if (window.scrollY > 100) {
    console.log("should lock");
    this.setState({
      scrollingLock: true
    });
  } else if (window.scrollY < 100) {
    console.log("not locked" );
    this.setState({
      scrollingLock: false
    });
  }

}

render() {

    return (
            <div style={{ width: "100%", position: this.state.scrollingLock ? "fixed" : "relative"}}>
                    {this.props.children}
            </div>
          )
            }
   }

export default Sticky;
