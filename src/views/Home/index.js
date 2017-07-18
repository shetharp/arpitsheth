import React, { Component } from 'react';
import Slide, {SlideTitle, SlideBody} from 'components/Slide/'
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div className="Home">

        <section className="Slide Slide_intro">
          <div className="Slide__content">
            <h1 className="Slide__title">Hey, I'm Arpit.</h1>
          </div>
        </section>

        <Slide id="cornell-tech" button="Contact Me" link="contact">
          <SlideTitle>
            Currently, I'm getting my MEng in <em>computer science</em> at <strong>Cornell Tech</strong>.
          </SlideTitle>
        </Slide>

        <Slide id="cornell-mars-rover">
          I build authentic <strong>brands</strong> that <em>bolster organizations</em>.
        </Slide>

      </div>
    );
  }
}

export default Home;
