import React, { Component } from 'react';
import Slide, {SlideTitle, SlideBody} from 'components/Slide/'
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div className="Home">

        <Slide id="intro">
          <SlideTitle>
            <strong>Hey, I'm Arpit.</strong>
          </SlideTitle>
          <SlideBody><em className="Slide__body_font-inf">Tech</em> pro with <em className="Slide__body_font-inf">creative</em> tendencies and a knack for <em className="Slide__body_font-inf">business</em>.</SlideBody>
        </Slide>

        <Slide id="cornell-tech" button="Contact Me" link="contact">
          <SlideTitle>
            Currently, I'm getting my MEng in <em>computer science</em> at <strong>Cornell Tech</strong>.
          </SlideTitle>
          <SlideBody>
            <strong>Cornell Tech MEng &rsquo;18</strong><br />
              Cornell University &rsquo;17
          </SlideBody>
        </Slide>

        <Slide id="cornell-mars-rover" button="View Case Study" link="/">
          <SlideTitle>
            I build authentic <strong>brands</strong> that <em>bolster organizations</em>.
          </SlideTitle>
          <SlideBody><strong>Featured:</strong> Cornell Mars Rover</SlideBody>
        </Slide>
      </div>
    );
  }
}

export default Home;
