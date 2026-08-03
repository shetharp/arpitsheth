/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import {
  Post,
  Slide,
  SlideBlog,
  SlideTitle,
  SlideDescription,
  FooterLogo,
  SlideButton,
} from "@shetharp/gatsby-theme-polaroid";
import { useStaticQuery, graphql, Link } from "gatsby";
import { footerLogoLink } from "../data/footer-logo-link";
import { slideParagraphSx } from "../components/slide-title";

export type SlidesProps = {
  posts: Post[];
};

/**
 * Shadow this file to add your own Slides to the homepage.
 * You can also split individual slides into their own file and import them here.
 */
const Slides: React.FC<SlidesProps> = (props) => {
  const { posts } = props;

  /**
   * Query for images
   * By default, these images should be located in your `/content/images` directory
   * The configuration for slideImageFragment is in `/src/data/slide-image-fragment.ts`
   */
  const slideImages = useStaticQuery(graphql`
    query {
      imgIntro: file(relativePath: { eq: "intro-arpit-sheth.jpg" }) {
        ...slideImageFragment
      }
      imgWeWork: file(relativePath: { eq: "wework.jpg" }) {
        ...slideImageFragment
      }
      imgCrater: file(relativePath: { eq: "crater.jpg" }) {
        ...slideImageFragment
      }
      imgCornell: file(relativePath: { eq: "cornell-tech.jpg" }) {
        ...slideImageFragment
      }
      imgMatter: file(relativePath: { eq: "matter.jpg" }) {
        ...slideImageFragment
      }
      imgMentoring: file(relativePath: { eq: "mentoring.jpg" }) {
        ...slideImageFragment
      }
      imgCulture: file(relativePath: { eq: "culture.jpg" }) {
        ...slideImageFragment
      }
    }
  `);

  // TODO -- replace quotes with smart quotes (for example, &apos; with &rsquo; or the ’ character)
  return (
    <React.Fragment>
      {/**
       * INTRO
       */}
      <Slide
        id="intro"
        title="I am a founder-grown tech leader with rare operating breadth across product, engineering, and design."
        description={
          <React.Fragment>
            <p sx={slideParagraphSx}>
              I co-founded <a href="#crater">Crater</a>, an AI video startup, taking it from 0-to-1, then spent six years at <a href="#wework">WeWork</a>,
              leading tech teams through hypergrowth, a public IPO, corporate restructures, and an acquisition. Today, I
              focus on collapsing the talent stack, building talent-dense teams that execute and strategize across
              functions.
            </p>

            <p sx={slideParagraphSx}>
              I'm a proud double-red Cornellian, having done my undergrad in CS at Cornell University, followed by an MEng in CS from <a href="#cornell">Cornell Tech</a>.
            </p>
          </React.Fragment>
        }
        fluid={slideImages.imgIntro.childImageSharp.fluid}
        overlayColor="lavender.dark"
        highlightColor="blush.base"
        isBorderless
        isExpanded
        imagePosition="60% 40%"
        hasScrollIndicator
      />

      {/**
       * WEWORK
       */}
      <Slide
        id="wework"
        title="I built R&D design tools, then led engineering for Member Acquisitions at WeWork."
        description={
          <React.Fragment>
            <p sx={slideParagraphSx}>
              I started as an engineer in R&D, building tools for interior designers and architects. I later led engineering for Member Acquisitions, including the wework.com website, ecommerce systems, and referrals platform — through hypergrowth, an IPO, corporate restructures, and a merger.
            </p>
          </React.Fragment>
        }
        fluid={slideImages.imgWeWork.childImageSharp.fluid}
        overlayColor="#01a08c" // WeWork brand green
        highlightColor="#035e4c" // WeWork brand green
        isColorful
        isExpanded
        imagePosition="90% 50%"
        button={{ text: "My Story", href: "https://www.linkedin.com/posts/shetharp_i-recently-crossed-6-years-at-weworka-path-ugcPost-7312666219948494848-Bkfu/" }}
      />

      {/**
       * CRATER
       */}
      <Slide
        id="crater"
        title="I was Co-founder &amp; CEO at Crater, a synthetic media startup building local TV for a new generation of creators."
        description={
          <React.Fragment>
            <p sx={{ marginBottom: 0, ...slideParagraphSx }}>
              I led a highly creative and deeply technical team of engineers and designers. We built an AI-powered video
              production app, got funding, and were featured as an{" "}
              <a
                href="https://www.technyc.org/posts/2018/9/five-cornell-tech-companies-to-watch"
                target="_blank"
                rel="noreferrer"
              >
                NYC startup to watch
              </a>
              .
            </p>
          </React.Fragment>
        }
        fluid={slideImages.imgCrater.childImageSharp.fluid}
        overlayColor="veronica.base"
        highlightColor="lavender.base"
        isExpanded
        imagePosition="75% 0%"
        button={{
          text: "View Case Study",
          href: "/crater",
        }}
      />

      {/**
       * CORNELL
       */}
      <Slide
        id="cornell"
        title="I bring the innovative studio experience with me to help cross-functional teams deliver impactful products."
        description={
          <React.Fragment>
            <p sx={slideParagraphSx}>
              In the Cornell Tech Studio, I worked with The Bill &amp; Melinda Gates Foundation on a{" "}
              <a
                href="https://tech.cornell.edu/news/cornell-tech-students-lead-the-way-in-building-technology-with-real-life-im/"
                target="_blank"
                rel="noreferrer"
              >
                digital financial services project
              </a>{" "}
              for low-income markets. I also won an award for designing a solution to{" "}
              <a
                href="https://tech.cornell.edu/news/remaking-the-city-masters-students-build-products-for-roosevelt-island-comm/"
                target="_blank"
                rel="noreferrer"
              >
                promote urban greenspaces
              </a>
              .
            </p>
            <p sx={{ marginBottom: 0, ...slideParagraphSx }}>
              <em>
                I hold an M.Eng in Computer Science from Cornell Tech. I&apos;m a proud first generation graduate and
                did my undergrad at Cornell University.
              </em>
            </p>
          </React.Fragment>
        }
        fluid={slideImages.imgCornell.childImageSharp.fluid}
        overlayColor="#003f7f"
        highlightColor="lemon.base"
        isExpanded
      />

      {/**
       * MATTER
       */}
      <Slide
        id="matter"
        title="At Matter, I built products to bring the future of manufacturing to independent designers, artisans, and fabricators."
        description={
          <React.Fragment>
            <p sx={slideParagraphSx}>
              I was awarded a fully sponsored fellowship by the{" "}
              <a
                href="https://www.engineering.cornell.edu/students/undergraduate-students/entrepreneurial-options-undergrad-students/kessler-fellows-program"
                target="_blank"
                rel="noreferrer"
              >
                Kessler Fellows Program
              </a>{" "}
              and chose to work directly with the co-founders of Matter, an early-stage startup backed by Techstars.
            </p>
            <p sx={{ marginBottom: 0, ...slideParagraphSx }}>
              I data-mined over 3,000 machine shop pricing models and used those insights to help launch a new product
              line of design collaboration software. The hard work paid off, and Matter was{" "}
              <a href="https://medium.com/making-matter/the-next-chapter-b0711d141e8c" target="_blank" rel="noreferrer">
                successfully acquired
              </a>{" "}
              a few months later.
            </p>
          </React.Fragment>
        }
        fluid={slideImages.imgMatter.childImageSharp.fluid}
        overlayColor="lavender.base"
        highlightColor="#09099b"
        isColorful
        isExpanded
      />

      {/**
       * MENTORING
       */}
      <Slide
        id="mentoring"
        title="I advise founders and build community across NYC's startup ecosystem."
        description={
          <React.Fragment>
            <p sx={slideParagraphSx}>
              I&apos;m passionate about NYC startups and love sharing my founder pattern recognition with founders, aspiring founders, and operators in the early-stage trenches. In addition to my involvement as a Notation VC Fellow, First Round Fast Track Mentor, and On Deck Catalyst Scout, I also serve as President of the Cornell Tech Alumni Council, a community of 2,200+ alumni and 100+ startups.
            </p>
            <p sx={{ marginBottom: 0, ...slideParagraphSx }}>
              If you&apos;re building something, I&apos;m happy to swap notes.
            </p>
          </React.Fragment>
        }
        fluid={slideImages.imgMentoring.childImageSharp.fluid}
        overlayColor="azure.base"
        highlightColor="crystal.base"
        imagePosition="45% 100%"
        button={{ text: "Contact Me", href: "/contact" }}
      />

      {/**
       * CULTURE
       */}
      {false && (
      <Slide
        id="culture"
        title="I promote a culture of inclusivity, creativity, and courage everywhere I go."
        description={
          <React.Fragment>
            <p sx={{ marginBottom: 0, ...slideParagraphSx }}>
              I got my certification at the{" "}
              <a
                href="https://www.engineering.cornell.edu/students/undergraduate-students/special-programs/engineering-leadership-programs/engineering"
                target="_blank"
                rel="noreferrer"
              >
                Cornell Engineering Leadership Program
              </a>{" "}
              and went on to become President of
              <a href="http://cornellthetatau.com/" target="_blank" rel="noreferrer">
                Cornell Theta Tau
              </a>
              . Most recently, I was a Technology Ambassador for{" "}
              <a
                href="https://www.linkedin.com/pulse/internship-builds-courage-arpit-sheth/"
                target="_blank"
                rel="noreferrer"
              >
                WeWork&apos;s internship program
              </a>
              .
            </p>
          </React.Fragment>
        }
        fluid={slideImages.imgCulture.childImageSharp.fluid}
        overlayColor="#d34247" // Theta Tau brand red
        highlightColor="saffron.dark"
        isColorful
        imagePosition="66% 50%"
        hasDistinctBorder
        button={{ text: "View Case Study", href: "/cornell-mars-rover" }}
      />
      )}

    </React.Fragment>
  );
};
export default Slides;
