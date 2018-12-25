import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import theme, { mediaq } from '../utils/theme';
import Layout from '../components/Layout';
import Slide from '../components/Slide';
import SEO from '../components/Seo';

/* ==================================================
 *  Styles
================================================== */
const introHighlight = '#1a66ff';

const animScroll = keyframes`
  0% {
    opacity: 1;
    transform: translate(100%, 0px) rotate(-90deg);
  }
  100% {
    opacity: 0.5;
    transform: translate(100%, 40px) rotate(-90deg);
  }
`;

// Used to override slide styles
const SlidesSection = styled.section`
  #intro {
    overflow: hidden;
    ::after {
      content: '<< SCROLL';
      font-family: ${theme.fonts.heading};
      letter-spacing: 0.5ch;

      position: absolute;
      bottom: 0;
      right: 0;
      transform: translateX(100%) rotate(-90deg);
      transform-origin: bottom left;

      color: ${introHighlight};
      font-size: 1.2rem;
      padding: 0 0 4px 48px;
      border-bottom: 4px solid ${introHighlight};
      display: flex;
      align-items: center;

      ${mediaq.sm`color: white;`}
      ${mediaq.sm`border-width: 8px;`}

      ${mediaq.md`background: ${introHighlight};`}
      ${mediaq.md`padding: 0 24px 0 48px;`}
      ${mediaq.md`border: none;`}
      ${mediaq.md`height: 24px;`}
      ${mediaq.md`right: 24px;`}

      ${mediaq.lg`font-size: 1.4rem;`}
      ${mediaq.lg`height: 32px;`}
      ${mediaq.lg`right: 32px;`}

      ${mediaq.xl`font-size: 1.6rem;`}
      ${mediaq.xl`height: 40px;`}
      ${mediaq.xl`right: 40px;`}

      animation: ${animScroll} 2s ease-in alternate infinite;
    }
  }
`;

/* ==================================================
 *  Render
================================================== */
function IndexPage({ data }) {
  /* --------------------------------------------------
   *  Slide Data
  -------------------------------------------------- */
  // slides contains the props data needed to create <Slide> elements.
  // For each slide that we want to render, we create an object and push it to slides.
  const slides = [];

  /* --------------------------------------------------
   *  Slide Data / Intro
  -------------------------------------------------- */
  slides.push({
    id: 'intro',
    title:
      'I’m an interdisciplinary engineer with creator instincts and a knack for starting things.',
    descr: (
      <>
        <p>
          I co-founded <Link to="#crater">Crater</Link> and was early at{' '}
          <Link to="#matter">Matter</Link>. I recently graduated from{' '}
          <Link to="#cornell">Cornell Tech</Link> with an M.Eng in CS and am looking for exciting
          new opportunities.
        </p>
      </>
    ),
    fluid: data.imgIntro.childImageSharp.fluid,
    overlay: '#030A1A',
    highlight: introHighlight,
    isColorful: false,
    isExpanded: false,
    position: '54% 0%',
    // button: { text: 'Scroll', link: '#crater', isExternal: false },
    isBorderless: true,
  });

  /* --------------------------------------------------
   *  Slide Data / Crater
  -------------------------------------------------- */
  slides.push({
    id: 'crater',
    title:
      'I was Co-founder & CEO at Crater, a synthetic media startup building local TV for the next generation.',
    descr: (
      <p>
        I led a highly creative and deeply technical team of engineers, designers, and product
        managers. We built an AI-powered video production app, got funding, and were featured as an
        NYC startup to watch.
      </p>
    ),
    fluid: data.imgCrater.childImageSharp.fluid,
    overlay: '#0E0214',
    highlight: '#102341',
    isColorful: false,
    isExpanded: true,
    position: '75% 0%',
    button: {
      text: 'Learn More',
      link: 'https://www.technyc.org/posts/2018/9/five-cornell-tech-companies-to-watch',
      isExternal: true,
    },
    // isBorderless: false,
  });

  /* --------------------------------------------------
   *  Slide Data / Cornell
  -------------------------------------------------- */
  slides.push({
    id: 'cornell',
    title: 'I recently graduated with an M.Eng in Computer Science from Cornell Tech.',
    descr: (
      <>
        <p>
          In the Studio, I worked with The Bill & Melinda Gates Foundation to provide{' '}
          <a href="https://tech.cornell.edu/news/cornell-tech-students-lead-the-way-in-building-technology-with-real-life-im/">
            digital financial services
          </a>{' '}
          to the next billion people. I also won an award for designing a civic tech solution to{' '}
          <a href="https://tech.cornell.edu/news/remaking-the-city-masters-students-build-products-for-roosevelt-island-comm/">
            promote urban greenspaces.
          </a>
        </p>
        <p>
          <em>I studied CS in undergrad at Cornell University.</em>
        </p>
      </>
    ),
    fluid: data.imgCornell.childImageSharp.fluid,
    overlay: '#0a1e2c',
    highlight: '#f3b632',
    isColorful: true,
    isExpanded: false,
    // position: '50% 50%',
    // button: { text: 'Learn More', link: '#', isExternal: true,},
    // isBorderless: false,
  });

  /* --------------------------------------------------
   *  Slide Data / Matter
  -------------------------------------------------- */
  slides.push({
    id: 'matter',
    title:
      'At Matter, I built products to bring the future of manufacturing to independent designers, artisans, and fabricators.',
    descr: (
      <p>
        I was awarded a fully sponsored fellowship by the{' '}
        <a href="https://www.engineering.cornell.edu/students/undergraduate-students/entrepreneurial-options-undergrad-students/kessler-fellows-program">
          Kessler Fellows Program
        </a>{' '}
        and chose to work directly with the co-founders of Matter, an early-stage startup backed by
        Techstars. I researched over 3,000 machine shops and shipped products to help steer the
        company towards <a href="https://angel.co/matter-io">strategic acquisition.</a>
      </p>
    ),
    fluid: data.imgMatter.childImageSharp.fluid,
    overlay: '#202540',
    highlight: '#8095FF',
    isColorful: false,
    isExpanded: true,
    position: '0% 50%',
    // button: { text: 'Learn More', link: '#', isExternal: true,},
    // isBorderless: false,
  });

  /* --------------------------------------------------
   *  Slide Data / Mentoring
  -------------------------------------------------- */
  slides.push({
    id: 'mentoring',
    title: 'I mentor students with entrepreneurial ambitions.',
    descr: (
      <>
        <p>
          Along with my friends, I launched{' '}
          <a href="http://cornell.3daystartup.org/">3 Day Startup at Cornell</a> to teach tech
          entrepreneurship. I also advised and did pro bono design work for portfolio companies at{' '}
          <a href="http://www.lifechanginglabs.com/">Life Changing Labs</a>.
        </p>
        <p>
          <em>If you’re working on something neat, I&rsquo;m happy to help however I can.</em>
        </p>
      </>
    ),
    fluid: data.imgMentoring.childImageSharp.fluid,
    overlay: '#00384D',
    highlight: '#0F8299',
    isColorful: false,
    isExpanded: false,
    position: '20% 60%',
    button: { text: 'Let’s Chat', link: '#', isExternal: false },
    // isBorderless: false,
  });

  /* --------------------------------------------------
   *  Slide Data / Speaking
  -------------------------------------------------- */
  slides.push({
    id: 'speaking',
    title: 'I speak to inspire career & creativity in tech.',
    descr: (
      <p>
        I got my certification at the Cornell{' '}
        <a href="https://www.engineering.cornell.edu/students/undergraduate-students/special-programs/engineering-leadership-programs/engineering">
          Engineering Leadership Program
        </a>{' '}
        and went on to become President of{' '}
        <a href="http://cornellthetatau.com/">Cornell Theta Tau</a> to promote career leadership for
        engineers on campus. I&rsquo;ve spoken at the{' '}
        <a href="https://usasciencefestival.org/">USA Science & Engineering Festival</a> and NJ
        Governor&rsquo;s School.
      </p>
    ),
    fluid: data.imgSpeaking.childImageSharp.fluid,
    overlay: '#00121A',
    highlight: '#b12426',
    isColorful: true,
    isExpanded: false,
    position: '60% 50%',
    // button: { text: 'Learn More', link: '#', isExternal: false },
    // isBorderless: false,
  });

  /* --------------------------------------------------
   *  Slide Data / Design
  -------------------------------------------------- */
  slides.push({
    id: 'design',
    title: 'I design branding to help organizations embody their culture and values.',
    descr: (
      <>
        <p>
          The branding initiative I launched at{' '}
          <a href="http://marsrover.engineering.cornell.edu/">Cornell Mars Rover</a> helped catapult
          the team from underdogs to one of the most competitive.
        </p>
        <p>
          <em>
            For over ten years I&rsquo;ve been teaching myself design. It is core to how I build
            products and lead teams.
          </em>
        </p>
      </>
    ),
    fluid: data.imgDesign.childImageSharp.fluid,
    overlay: '#000000',
    highlight: '#b12426',
    isColorful: true,
    isExpanded: false,
    // position: '50% 50%',
    // button: { text: 'Learn More', link: '#', isExternal: false },
    // isBorderless: false,
  });

  /* --------------------------------------------------
   *  Slide Data / Creative
  -------------------------------------------------- */
  slides.push({
    id: 'creative',
    title: `AI may come after our creative abilities, but it can't take away our expressive identities.`,
    descr: (
      <p>
        I make time for art. Sometimes, I draw{' '}
        <a href="https://drive.google.com/drive/folders/1zr4VldrOsgcPi33BazRQfmpSDjg0ZGp4?usp=sharing">
          sci-fi illustrations.
        </a>{' '}
        But mostly, I savor the subtle splendor of the world with photography.
      </p>
    ),
    fluid: data.imgCreative.childImageSharp.fluid,
    overlay: '#381F01',
    highlight: '#FCB156',
    isColorful: false,
    isExpanded: false,
    position: '52.5% 50%',
    button: {
      text: 'View Photos',
      link: 'https://www.instagram.com/shetharp/',
      isExternal: true,
    },
    // isBorderless: false,
  });

  /* --------------------------------------------------
   *  Slide Data / Render
  -------------------------------------------------- */
  // Why map is used: https://reactjs.org/docs/lists-and-keys.html
  // Why a 'key' prop is needed: https://reactjs.org/docs/lists-and-keys.html#keys
  const renderSlides = slides.map(slideProps => <Slide key={slideProps.id} {...slideProps} />);

  /* --------------------------------------------------
  *  Render Component
  -------------------------------------------------- */
  return (
    <Layout hasTransparentHeader hasStickyHeader>
      <SEO title="Home" keywords={['arpit', 'sheth', 'shetharp', 'cornell', 'tech']} />
      <SlidesSection>{renderSlides}</SlidesSection>
    </Layout>
  );
}
export default IndexPage;

/* ==================================================
 *  Properties
================================================== */
IndexPage.propTypes = {
  data: PropTypes.object,
};

/* ==================================================
 *  Queries
================================================== */

// GraphQL fragment to load fluid responsive images
export const slideImage = graphql`
  fragment slideImage on File {
    childImageSharp {
      fluid(maxWidth: 4000, quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
// GraphQL query to load the images based on the fragment
// See https://codebushi.com/using-gatsby-image/ for more info
export const pageQuery = graphql`
  query {
    imgIntro: file(relativePath: { eq: "slides/intro-arpit-sheth.jpg" }) {
      ...slideImage
    }
    imgCrater: file(relativePath: { eq: "slides/crater-land-team.jpg" }) {
      ...slideImage
    }
    imgCornell: file(relativePath: { eq: "slides/cornell-tech.jpg" }) {
      ...slideImage
    }
    imgMatter: file(relativePath: { eq: "slides/matter.jpg" }) {
      ...slideImage
    }
    imgMentoring: file(relativePath: { eq: "slides/mentoring-student-startups.jpg" }) {
      ...slideImage
    }
    imgSpeaking: file(relativePath: { eq: "slides/speaking-arpit-sheth.jpg" }) {
      ...slideImage
    }
    imgDesign: file(relativePath: { eq: "slides/design-cornell-mars-rover.jpg" }) {
      ...slideImage
    }
    imgCreative: file(relativePath: { eq: "slides/creative-udaipur-palace.jpg" }) {
      ...slideImage
    }
  }
`;
