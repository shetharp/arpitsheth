import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <section className="slide slide--intro">
          <div className="slide__content">
            <h1 className="slide__title">Hey, I'm Arpit.</h1>
          </div>
        </section>
        <section className="slide slide--cornell-tech" id="cornell-tech">
          <div className="slide__content">
            <h1 className="slide__title">Currently, I'm getting my MEng in <em>computer science</em> at <strong>Cornell Tech</strong>.</h1>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
