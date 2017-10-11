import React, { Component } from 'react';
import Header from "components/Header/";

import Scroll from 'react-scroll'
import Slide, {SlideImg, SlideTitle, SlideBody} from 'components/Slide/'
import './Home.css';

import ImgIntro from './img/arpit-sheth-intro.jpg';
import ImgIntro_lg from './img/arpit-sheth-intro@lg.jpg';
import ImgIntro_sm from './img/arpit-sheth-intro@sm.jpg';
import ImgIntro_xs from './img/arpit-sheth-intro@xs.jpg';
import ImgIntro_temp from './img/arpit-sheth-intro@temp.jpg';

import ImgCornellTech from './img/cornell-tech.jpg';
import ImgCornellTech_lg from './img/cornell-tech@lg.jpg';
import ImgCornellTech_sm from './img/cornell-tech@sm.jpg';
import ImgCornellTech_xs from './img/cornell-tech@xs.jpg';
import ImgCornellTech_temp from './img/cornell-tech@temp.jpg';

import ImgCMR from './img/cornell-mars-rover.jpg';
import ImgCMR_lg from './img/cornell-mars-rover@lg.jpg';
import ImgCMR_sm from './img/cornell-mars-rover@sm.jpg';
import ImgCMR_xs from './img/cornell-mars-rover@xs.jpg';
import ImgCMR_temp from './img/cornell-mars-rover@temp.jpg';

import ImgPublicSpeaking from './img/public-speaking.jpg';
import ImgPublicSpeaking_lg from './img/public-speaking@lg.jpg';
import ImgPublicSpeaking_sm from './img/public-speaking@sm.jpg';
import ImgPublicSpeaking_xs from './img/public-speaking@xs.jpg';
import ImgPublicSpeaking_temp from './img/public-speaking@temp.jpg';

import Img3DayStartup from './img/3-day-startup.jpg';
import Img3DayStartup_lg from './img/3-day-startup@lg.jpg';
import Img3DayStartup_sm from './img/3-day-startup@sm.jpg';
import Img3DayStartup_xs from './img/3-day-startup@xs.jpg';
import Img3DayStartup_temp from './img/3-day-startup@temp.jpg';

import ImgEMSDashboard from './img/ems-dashboard.jpg';
import ImgEMSDashboard_lg from './img/ems-dashboard@lg.jpg';
import ImgEMSDashboard_sm from './img/ems-dashboard@sm.jpg';
import ImgEMSDashboard_xs from './img/ems-dashboard@xs.jpg';
import ImgEMSDashboard_temp from './img/ems-dashboard@temp.jpg';

import ImgCloudComputing from './img/nj-gset.jpg';
import ImgCloudComputing_lg from './img/nj-gset@lg.jpg';
import ImgCloudComputing_sm from './img/nj-gset@sm.jpg';
import ImgCloudComputing_xs from './img/nj-gset@xs.jpg';
import ImgCloudComputing_temp from './img/nj-gset@temp.jpg';
// Photo Credit: https://commons.wikimedia.org/wiki/File:Oligodendroglioma1_high_mag.jpg

import ImgArtificialCreativity from './img/artificial-creativity.jpg';
import ImgArtificialCreativity_lg from './img/artificial-creativity@lg.jpg';
import ImgArtificialCreativity_sm from './img/artificial-creativity@sm.jpg';
import ImgArtificialCreativity_xs from './img/artificial-creativity@xs.jpg';
import ImgArtificialCreativity_temp from './img/artificial-creativity@temp.jpg';

import ImgArt from './img/a-space-journey.jpg';
import ImgArt_lg from './img/a-space-journey@lg.jpg';
import ImgArt_sm from './img/a-space-journey@sm.jpg';
import ImgArt_xs from './img/a-space-journey@xs.jpg';
import ImgArt_temp from './img/a-space-journey@temp.jpg';

import ImgPhotography from './img/thailand.jpg';
import ImgPhotography_lg from './img/thailand@lg.jpg';
import ImgPhotography_sm from './img/thailand@sm.jpg';
import ImgPhotography_xs from './img/thailand@xs.jpg';
import ImgPhotography_temp from './img/thailand@temp.jpg';

import ImgMore from './img/arpit-sheth-more.jpg';
import ImgMore_lg from './img/arpit-sheth-more@lg.jpg';
import ImgMore_sm from './img/arpit-sheth-more@sm.jpg';
import ImgMore_xs from './img/arpit-sheth-more@xs.jpg';
import ImgMore_temp from './img/arpit-sheth-more@temp.jpg';

class Home extends Component {
  render() {
    /** Save the imported images into an object
     * The images were assumed to be 3:2 aspect ratio and scaled according to:
     * def: 1500px wide, 95% compression
     * lg: 3000px wide, 95% compression
     * sm: 900px wide, 90% compression
     * xs: 600px wide, 90% compression
     * temp: 150px wide, 20% compression
     */
    let bgIntro = {
      def: ImgIntro,
      lg: ImgIntro_lg,
      sm: ImgIntro_sm,
      xs: ImgIntro_xs,
      temp: ImgIntro_temp
    }

    let bgCornellTech = {
      def: ImgCornellTech,
      lg: ImgCornellTech_lg,
      sm: ImgCornellTech_sm,
      xs: ImgCornellTech_xs,
      temp: ImgCornellTech_temp
    }

    let bgCMR = {
      def: ImgCMR,
      lg: ImgCMR_lg,
      sm: ImgCMR_sm,
      xs: ImgCMR_xs,
      temp: ImgCMR_temp
    }

    let bgPublicSpeaking = {
      def: ImgPublicSpeaking,
      lg: ImgPublicSpeaking_lg,
      sm: ImgPublicSpeaking_sm,
      xs: ImgPublicSpeaking_xs,
      temp: ImgPublicSpeaking_temp
    }

    let bg3DayStartup = {
      def: Img3DayStartup,
      lg: Img3DayStartup_lg,
      sm: Img3DayStartup_sm,
      xs: Img3DayStartup_xs,
      temp: Img3DayStartup_temp
    }

    let bgEMSDashboard = {
      def: ImgEMSDashboard,
      lg: ImgEMSDashboard_lg,
      sm: ImgEMSDashboard_sm,
      xs: ImgEMSDashboard_xs,
      temp: ImgEMSDashboard_temp
    }

    let bgCloudComputing = {
      def: ImgCloudComputing,
      lg: ImgCloudComputing_lg,
      sm: ImgCloudComputing_sm,
      xs: ImgCloudComputing_xs,
      temp: ImgCloudComputing_temp
    }

    let bgArtificialCreativity = {
      def: ImgArtificialCreativity,
      lg: ImgArtificialCreativity_lg,
      sm: ImgArtificialCreativity_sm,
      xs: ImgArtificialCreativity_xs,
      temp: ImgArtificialCreativity_temp
    }

    let bgArt = {
      def: ImgArt,
      lg: ImgArt_lg,
      sm: ImgArt_sm,
      xs: ImgArt_xs,
      temp: ImgArt_temp
    }

    let bgPhotography = {
      def: ImgPhotography,
      lg: ImgPhotography_lg,
      sm: ImgPhotography_sm,
      xs: ImgPhotography_xs,
      temp: ImgPhotography_temp
    }

    let bgMore = {
      def: ImgMore,
      lg: ImgMore_lg,
      sm: ImgMore_sm,
      xs: ImgMore_xs,
      temp: ImgMore_temp
    }



    return (
      <div className="Home">
        <Header transparent={true} />
        
        <main>
          <Slide
            id="intro"
            bg={bgIntro}
          >
            <SlideTitle>
              <strong>Hey, I’m Arpit.</strong>
            </SlideTitle>
            <SlideBody>
              <h2 className="Slide__subtitle">
                <em className="Slide__body_font-inf">Tech</em> visionary with <em className="Slide__body_font-inf">creative</em> tendencies and a knack for <em className="Slide__body_font-inf">business</em>.
              </h2>
              <Scroll.Link to="cornell-tech" smooth={true} className="Slide_scroll"></Scroll.Link>
            </SlideBody>
          </Slide>


          <Slide
            id="cornell-tech"
            bg={bgCornellTech}
            wide={true}
            button={{text: "Contact Me", link: "contact", external: false}}
          >
            <SlideTitle>
              Currently, I’m getting my MEng in <em>computer science</em> at <strong>Cornell Tech</strong>.
            </SlideTitle>
            <SlideBody>
              <strong>Cornell Tech MEng &rsquo;18</strong><br />
                Cornell University &rsquo;17
            </SlideBody>
          </Slide>


          <Slide
            id="cornell-mars-rover"
            bg={bgCMR}
            wide={false}
            button={{text: "View Case Study", link: "/", external: false}}
          >
            <SlideTitle>
              I build authentic <strong>brands</strong> that <em>bolster organizations</em>.
            </SlideTitle>
            <SlideBody><strong>Featured:</strong> Cornell Mars Rover</SlideBody>
          </Slide>


          <Slide
            id="public-speaking"
            bg={bgPublicSpeaking}
            wide={true}
            button={{text: "Learn More", link: "/", external: false}}
          >
            <SlideTitle>
              I <strong>speak</strong> to inspire interest in <em>STEM, design, and leadership</em>.
            </SlideTitle>
            <SlideBody><strong>Featured:</strong> USA Science & Engineering Festival</SlideBody>
          </Slide>


          <Slide
            id="entrepreneurship"
            bg={bg3DayStartup}
            wide={false}
            button={{text: "Learn More", link: "/", external: false}}
          >
            <SlideTitle>
              I <strong>mentor</strong> students with <em>entrepreneurial ambitions</em>.
            </SlideTitle>
            <SlideBody><strong>Featured:</strong> 3 Day Startup at Cornell</SlideBody>
          </Slide>


          <Slide
            id="data-design"
            bg={bgEMSDashboard}
            wide={true}
            button={{text: "View Case Study", link: "/", external: false}}
          >
            <SlideTitle>
              I combine <strong>data & design</strong> to make <em>information accessible</em>.
            </SlideTitle>
            <SlideBody><strong>Featured:</strong> Cornell University Emergency Medical Service</SlideBody>
          </Slide>


          <Slide
            id="cloud-computing"
            bg={bgCloudComputing}
            wide={true}
            button={{text: "Learn More", link: "/", external: false}}
          >
            <SlideTitle>
              I’ve researched how to <em>detect cancer</em> with <strong>cloud computing</strong>.
            </SlideTitle>
            <SlideBody><strong>Featured:</strong> NJ Governor’s School of Engineering and Technology</SlideBody>
          </Slide>


          <Slide
            id="artificial-creativity"
            bg={bgArtificialCreativity}
            wide={true}
            button={{text: "View Project", link: "/", external: false}}
          >
            <SlideTitle>
              I beleive <strong>artificial creativity</strong> will empower the future of <em>expression and innovation</em>.
            </SlideTitle>
            <SlideBody><strong>Featured:</strong> Origami Fill</SlideBody>
          </Slide>


          <Slide
            id="art"
            bg={bgArt}
            wide={false}
            button={{text: "View Project", link: "/", external: false}}
          >
            <SlideTitle>
              Sometimes, I burn the <em>midnight oil</em> working on <strong>art</strong>.
            </SlideTitle>
            <SlideBody><strong>Featured:</strong> A Space Journey</SlideBody>
          </Slide>


          <Slide
            id="photos"
            bg={bgPhotography}
            wide={false}
            button={{text: "View Photos", link: "//instagram.com/shetharp", external: true}}
          >
            <SlideTitle>
              I <em>explore the world</em> around me through <strong>photography</strong>.
            </SlideTitle>
            <SlideBody><strong>Featured:</strong> Instagram Profile</SlideBody>
          </Slide>


          <Slide
            id="more"
            bg={bgMore}
            wide={true}
            button={{text: "Go To Blog", link: "/", external: false}}
          >
            <SlideTitle>
              There’s more <strong>awesome</strong> to <em>discover</em>!
            </SlideTitle>
            <SlideBody>
              <strong>Blog</strong> • <strong>Instagram</strong> • <strong>Contact</strong>
            </SlideBody>
          </Slide>
        </main>
      </div>
    );
  }
}

export default Home;
