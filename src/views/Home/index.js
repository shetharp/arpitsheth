import React, { Component } from 'react';
import Slide from './Slide/'


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

        <section className="slide slide--cornell-mars-rover" id="cornell-mars-rover">
          <div className="slide__content">
            <h1 className="slide__title">I build authentic <strong>brands</strong> that <em>bolster organizations</em>.</h1>
          </div>
        </section>

      </div>
    );
  }
}

export default Home;
