import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Slide from '../components/slide'
import SEO from '../components/seo'

/* ==================================================
 *  Styles
================================================== */
// ...

/* ==================================================
 *  Render Component
================================================== */
const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={['arpit', 'sheth', 'shetharp', 'cornell', 'tech']}
    />

    {/* ==================================================
        *   Slide / Intro
      ================================================== */}
    <Slide
      id="intro"
      title="I&rsquo;m an interdisciplinary engineer with creator instincts and a knack for starting things."
      fluid={data.imgIntro.childImageSharp.fluid}
      position="50% 0%"
      button={{ text: 'Learn More', link: '#', isExternal: false }}
      noBorder
    >
      I co-founded <Link to="#">Crater</Link> and recently graduated from{' '}
      <Link to="#">Cornell Tech</Link> with an M.Eng in CS. I'm now looking for
      exciting opportunities.
    </Slide>

    {/* ==================================================
        *   Slide / Crater
      ================================================== */}
    <Slide
      id="crater"
      title="I was Co-founder & CEO at Crater, a synthetic media startup building local TV for the next generation."
      fluid={data.imgCrater.childImageSharp.fluid}
      button={{
        text: 'Visit Crater',
        link: 'https://crater.land',
        isExternal: true,
      }}
    >
      I led a highly creative and deeply technical team of engineers, designers,
      and product managers. We built an AI-powered video production app for iOS
      & Android and raised $100,000 in VC funding.
    </Slide>

    {/* ==================================================
        *   Slide / Cornell
      ================================================== */}
    <Slide
      id="cornell"
      title="I recently graduated with an M.Eng in Computer Science from Cornell Tech."
      fluid={data.imgCornell.childImageSharp.fluid}
    >
      In the Studio, I worked with The Bill & Melinda Gates Foundation to{' '}
      <a href="https://tech.cornell.edu/news/cornell-tech-students-lead-the-way-in-building-technology-with-real-life-im/">
        provide digital financial services
      </a>{' '}
      for the next billion people.
      I won an award for designing a civic tech
      solution to <a href="https://tech.cornell.edu/news/remaking-the-city-masters-students-build-products-for-roosevelt-island-comm/">
        promote urban greenspaces.
      </a>
      <br />
      <br />I also studied CS in undergrad at Cornell University.
    </Slide>
  </Layout>
)
export default IndexPage

/* ==================================================
 *  Component Properties
================================================== */
// ...

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
`
// GraphQL query to load the images based on the fragment
// See https://codebushi.com/using-gatsby-image/ for more info
export const pageQuery = graphql`
  query {
    imgIntro: file(relativePath: { eq: "slides/intro.jpg" }) {
      ...slideImage
    }
    imgCrater: file(relativePath: { eq: "slides/crater.jpg" }) {
      ...slideImage
    }
    imgCornell: file(relativePath: { eq: "slides/cornell.jpg" }) {
      ...slideImage
    }
  }
`
