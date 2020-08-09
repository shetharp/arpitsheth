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
    }
  `);

  return (
    <React.Fragment>
      {/**
       * INTRO
       */}
      <Slide
        id="intro"
        title="I am a startup-savvy engineer building technology for a more creative future."
        description={
          <React.Fragment>
            <p>
              I currently develop software at <a href="#wework">WeWork</a> that brings our company&apos;s secret
              sauce&mdash;beautiful spaces with a global community&mdash;to life. I&apos;m a battle-tested starter,
              having co-founded <a href="#crater">Crater</a> and hustled at <a href="#matter">Matter</a>. I hold an
              M.Eng in CS from <a href="#cornell-tech">Cornell Tech</a> and did my undergrad at Cornell University.
            </p>
          </React.Fragment>
        }
        fluid={slideImages.imgIntro.childImageSharp.fluid}
        overlayColor="lavender.dark"
        highlightColor="blush.base"
        isBorderless
        isExpanded
        hasScrollIndicator
      />

      {/**
       * WEWORK
       */}
      <Slide
        id="wework"
        title="I build new products for the most creative people at WeWork."
        description={
          <React.Fragment>
            <p>
              As a Senior Lead Software Engineer, I lead projects that enable our interior designers and architects to
              design beautiful spaces at unprecedented scale.
            </p>
            <p sx={{ marginBottom: 0 }}>
              <em>
                Get in touch if you&apos;re looking for a product-obsessed engineer to lead your next interdisciplinary
                project.
              </em>
            </p>
          </React.Fragment>
        }
        fluid={slideImages.imgWeWork.childImageSharp.fluid}
        overlayColor="#01a08c" // WeWork brand green
        highlightColor="#035e4c" // WeWork brand green
        isColorful
        isExpanded
        button={{ text: "Contact Me", href: "/contact" }}
      />

      {/**
       * CRATER
       */}
      <Slide
        id="crater"
        title="I was Co-founder &amp; CEO at Crater, a synthetic media startup building local TV for a new generation of creators."
        description={
          <React.Fragment>
            I led a highly creative and deeply technical team of engineers and designers. We built an AI-powered video
            production app, got funding, and were featured as an NYC startup to watch.
          </React.Fragment>
        }
        fluid={slideImages.imgCrater.childImageSharp.fluid}
        overlayColor="veronica.base"
        highlightColor="saffron.dark"
        isExpanded
        imagePosition="50% 0%"
        button={{
          text: "Read Press Coverage",
          href: "https://www.technyc.org/posts/2018/9/five-cornell-tech-companies-to-watch",
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
            <p>
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
            <p sx={{ marginBottom: 0 }}>
              <em>
                I hold an M.Eng in Computer Science from Cornell Tech. I&apos;m a proud first generation graduate and
                did my undergrad at Cornell University.
              </em>
            </p>
          </React.Fragment>
        }
        fluid={slideImages.imgCornell.childImageSharp.fluid}
        overlayColor="azure.dark"
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
            <p>
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
            <p sx={{ marginBottom: 0 }}>
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
       * BLOG
       */}
      <SlideBlog id="blog" posts={posts} backgroundColor="mediumblue" overlayColor="primary">
        <SlideTitle>More</SlideTitle>
        <SlideDescription>
          <p>
            Yet so vain is man, and so <em>blinded by his vanity</em>, that no writer, up to the very end of the
            nineteenth century, expressed any idea that <a href="#">intelligent life</a> might have developed there far,
            or indeed at all, beyond its earthly level. Nor was it generally understood that since Mars is older than
            our earth... (<a href="https://www.gutenberg.org/files/36/36-h/36-h.htm">The War of Worlds</a>, H.G. Wells).
          </p>
        </SlideDescription>
        <p>
          <SlideButton
            href="https://github.com/shetharp/gatsby-theme-polaroid"
            sx={{ "&&&": { width: ["100%", null, "75%", "66.667%", "75%", null, "66.667%", null, "50%"] } }}
          >
            View on GitHub
          </SlideButton>
        </p>
        <SlideDescription>
          <p>
            <br />
            &mdash;
          </p>
          <p>
            <FooterLogo />
            <br />
            Polaroid Theme
            <br />
            By <a href="https://arpitsheth.com/">Arpit Sheth</a>
          </p>
        </SlideDescription>
      </SlideBlog>
    </React.Fragment>
  );
};
export default Slides;
