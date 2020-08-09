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
      imgWork: file(relativePath: { eq: "kite-festival-2.jpg" }) {
        ...slideImageFragment
      }
      imgProject: file(relativePath: { eq: "kite-festival-3.jpg" }) {
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
                If you&apos;re looking for a product-obsessed engineer to lead your next interdisciplinary
                project&mdash;I&apos;m your guy.
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
       * WORK
       */}
      <Slide
        id="work"
        title="Savor the moment slowly, for it may slip away too soon."
        description={
          <React.Fragment>
            I went down yesterday to the <a href="#!">Piraeus with Glaucon</a> the son of Ariston, that I might offer up
            my prayers to the goddess (Bendis, the <Link to="#">Thracian Artemis.</Link>); and also because{" "}
            <em>I wanted to see</em> in what manner they would celebrate the festival, which was a new thing.
          </React.Fragment>
        }
        fluid={slideImages.imgWork.childImageSharp.fluid}
        overlayColor="secondary"
        highlightColor="saffron.dark"
        isExpanded
        imagePosition="0% 0%"
        button={{ text: "Get started", href: "/readme" }}
      />

      {/**
       * PROJECT
       */}
      <Slide
        id="project"
        title="What if you replaced the noise of becoming with the silence of being?"
        description={
          <React.Fragment>
            Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, seemed to unite
            some of the best <em>blessings of existence</em>; and had lived nearly{" "}
            <a href="https://www.gutenberg.org/files/158/158-h/158-h.htm#link2HCH0001">twenty-one years</a> in the world
            with very little to distress or vex her.
          </React.Fragment>
        }
        fluid={slideImages.imgProject.childImageSharp.fluid}
        overlayColor="mediumslateblue"
        highlightColor="mediumorchid"
        isColorful
        isExpanded
        hasDistinctBorder
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
