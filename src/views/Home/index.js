import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from "components/Header/";

import Scroll from 'react-scroll'
import Slide, {SlideImg, SlideTitle, SlideBody} from 'components/Slide/'
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header transparent={true} />
        
        <main>

          {/* ==================================================
            *   Intro
            * ================================================== */}
          <Slide
            id="intro"
            // bg={bgIntro}
          >
            <SlideTitle>
              <strong>Hey, I’m Arpit.</strong>
            </SlideTitle>
            <SlideBody>
              <h2 className="Slide__subtitle">
                {/* <em className="Slide__body_font-inf">Tech</em> visionary with <em className="Slide__body_font-inf">creative</em> tendencies and a knack for <em className="Slide__body_font-inf">business</em>. */}
                Tech entrepreneur intertwining creativity and community.
              </h2>
              <Scroll.Link to="cornell-tech" smooth={true} className="Slide_scroll"></Scroll.Link>
            </SlideBody>
          </Slide>

          {/* ==================================================
            *   Crater
            * ================================================== */}
          <Slide
            id="crater"
            // bg={}
            // wide={true}
            button={{text: "Go to Crater", link: "https://crater.land", external: true}}
          >
            <SlideTitle>
              Currently, I'm <em>co-founder and CEO</em> at <strong>Crater</strong>.
            </SlideTitle>
            <SlideBody>
              {/* <strong>We're building a new type of local TV</strong> &ndash; made for mobile, powered by AI, and led by movers-and-shakers from your community. */}
              Crater is a revolution in local TV led by a new generation of creators.
            </SlideBody>
          </Slide>

          {/* ==================================================
            *   Matter
            * ================================================== */}
          <Slide
            id="matter"
            // bg={}
            wide={true}
            button={{text: "Go to Matter", link: "https://matter.io", external: true}}
          >
            <SlideTitle>
              I worked with the founders at <strong>Matter</strong> to build the future of <em>design and manufacturing</em>.
            </SlideTitle>
            <SlideBody>
              Early stage startup backed by Techstars, KEC Ventures, and acquired by Junction in 2016<br/>
              <strong>Cornell Kessler Fellow '16</strong>
            </SlideBody>
          </Slide>

          {/* ==================================================
            *   Education
            * ================================================== */}
          <Slide
            id="education"
            // bg={bgCornellTech}
            wide={true}
            button={{text: "Contact Me", link: "contact", external: false}}
          >
            <SlideTitle>
              I’m a proud 2x <strong>Cornell</strong> alum with an <em>MEng in computer science</em>.
            </SlideTitle>
            <SlideBody>
              <strong>Cornell Tech MEng &rsquo;18</strong><br />
                Cornell University &rsquo;17
            </SlideBody>
          </Slide>

          {/* ==================================================
            *   Creative Problem Solvers
            * ================================================== */}
          <Slide
            id="cornell-mars-rover"
            // bg={bgCMR}
            wide={true}
          >
            <SlideTitle>
              I bring <strong>creative problem solvers</strong> together to take on <em>big ideas</em>.
            </SlideTitle>
            <SlideBody><strong>Featured:</strong> Cornell Mars Rover</SlideBody>
          </Slide>

          {/* ==================================================
            *   Education
            * ================================================== */}
          <Slide
            id="public-speaking"
            // bg={bgPublicSpeaking}
            wide={true}
          >
            <SlideTitle>
              I <strong>speak</strong> to inspire interest in <em>STEM, design, and leadership</em>.
            </SlideTitle>
            <SlideBody><strong>Featured:</strong> USA Science &amp; Engineering Festival</SlideBody>
          </Slide>

          {/* ==================================================
            *   Education
            * ================================================== */}
          <Slide
            id="mentor"
            // bg={bg3DayStartup}
            wide={false}
          >
            <SlideTitle>
              I <strong>mentor</strong> students with <em>entrepreneurial ambitions</em>.
            </SlideTitle>
            <SlideBody><strong>Featured:</strong> 3 Day Startup at Cornell</SlideBody>
          </Slide>

          {/* ==================================================
            *   Community
            * ================================================== */}
          <Slide
            id="community"
            // bg={}
            wide={true}
          >
            <SlideTitle>
              I build <strong>communities</strong> with a culture of <em>diversity and personal growth</em>.
            </SlideTitle>
            {/* <SlideBody><strong>Featured:</strong> Cornell Theta Tau</SlideBody> */}
          </Slide>

          {/* ==================================================
            *   Creative AI
            * ================================================== */}
          <Slide
            id="creative-ai"
            // bg={bgArtificialCreativity}
            wide={true}
          >
            <SlideTitle>
              I believe <strong>creative AI</strong> will unlock the future of <em>expression and innovation</em>.
            </SlideTitle>
            <SlideBody><strong>Featured:</strong> Origami Fill</SlideBody>
          </Slide>

          {/* ==================================================
            *   Art
            * ================================================== */}
          <Slide
            id="art"
            // bg={bgArt}
            wide={false}
          >
            <SlideTitle>
              Sometimes, I burn the <em>midnight oil</em> working on <strong>art</strong>.
            </SlideTitle>
            <SlideBody><strong>Featured:</strong> A Space Journey</SlideBody>
          </Slide>

          {/* ==================================================
            *   Photos
            * ================================================== */}
          <Slide
            id="photos"
            // bg={bgPhotography}
            wide={false}
            button={{text: "View Photos", link: "//instagram.com/shetharp", external: true}}
          >
            <SlideTitle>
              I <em>explore the world</em> around me with <strong>photography</strong>.
            </SlideTitle>
            <SlideBody><strong>Featured:</strong> Instagram Profile</SlideBody>
          </Slide>

          {/* ==================================================
            *   More
            * ================================================== */}
          <Slide
            id="more"
            // bg={bgMore}
            wide={true}
          >
            <SlideTitle>
              There’s more <strong>awesome</strong> to <em>discover</em>!
            </SlideTitle>
            <SlideBody>
              {/*<strong><Link to="/">Blog</Link></strong> • */}
              <strong><a href="https://instagram.com/shetharp">Instagram</a></strong> •&nbsp;
              <strong><a href="https://linkedin.com/in/shetharp">LinkedIn</a></strong> •&nbsp;
              <strong><Link to="/contact">Contact</Link></strong>
            </SlideBody>
          </Slide>
        </main>
      </div>
    );
  }
}

export default Home;
