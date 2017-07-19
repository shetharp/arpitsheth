import React, { Component } from 'react';
import Slide, {SlideTitle, SlideBody} from 'components/Slide/'
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div className="Home">

        <Slide id="intro">
          <SlideTitle>
            <strong>Hey, I’m Arpit.</strong>
          </SlideTitle>
          <SlideBody><em className="Slide__body_font-inf">Tech</em> pro with <em className="Slide__body_font-inf">creative</em> tendencies and a knack for <em className="Slide__body_font-inf">business</em>.</SlideBody>
        </Slide>

        <Slide id="cornell-tech" wide={true} button="Contact Me" link="contact">
          <SlideTitle>
            Currently, I’m getting my MEng in <em>computer science</em> at <strong>Cornell Tech</strong>.
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

        <Slide id="public-speaking" wide={true} button="Learn More" link="/">
          <SlideTitle>
            I <strong>speak</strong> to inspire interest in <em>STEM, design, and leadership</em>.
          </SlideTitle>
          <SlideBody><strong>Featured:</strong> USA Science & Engineering Festival</SlideBody>
        </Slide>

        <Slide id="entrepreneurship" button="Learn More" link="/">
          <SlideTitle>
            I <strong>mentor</strong> students with <em>entrepreneurial ambitions</em>.
          </SlideTitle>
          <SlideBody><strong>Featured:</strong> 3 Day Startup at Cornell</SlideBody>
        </Slide>

        <Slide id="data-design" wide={true} button="View Case Study" link="/">
          <SlideTitle>
            I combine <strong>data & design</strong> to make <em>information accessible</em>.
          </SlideTitle>
          <SlideBody><strong>Featured:</strong> Cornell University Emergency Medical Service</SlideBody>
        </Slide>

        <Slide id="cloud-computing" wide={true} button="View Project" link="/">
          <SlideTitle>
            I’ve researched how to <em>detect cancer</em> with <strong>cloud computing</strong>.
          </SlideTitle>
          <SlideBody><strong>Featured:</strong> NJ Governor’s School of Engineering and Technology</SlideBody>
        </Slide>

        <Slide id="artificial-creativity" wide={true} button="View Project" link="/">
          <SlideTitle>
            I beleive <strong>artificial creativity</strong> will empower the future of <em>expression and innovation</em>.
          </SlideTitle>
          <SlideBody><strong>Featured:</strong> Origami Fill</SlideBody>
        </Slide>

        <Slide id="art" button="View Project" link="/">
          <SlideTitle>
            Sometimes, I burn the <em>midnight oil</em> working on <strong>art</strong>.
          </SlideTitle>
          <SlideBody><strong>Featured:</strong> A Space Journey</SlideBody>
        </Slide>

        <Slide id="photos" button="View Photos" link="//instagram.com/shetharp" linkExternal={true}>
          <SlideTitle>
            I <em>explore the world</em> around me through <strong>photography</strong>.
          </SlideTitle>
          <SlideBody><strong>Featured:</strong> Instagram Profile</SlideBody>
        </Slide>

        <Slide id="more" wide={true} button="View Photos" link="/">
          <SlideTitle>
            There’s more <strong>awesome</strong> to <em>discover</em>!
          </SlideTitle>
          <SlideBody>
            <strong>Blog</strong> • <strong>Instagram</strong> • <strong>Contact</strong>
          </SlideBody>
        </Slide>

      </div>
    );
  }
}

export default Home;
