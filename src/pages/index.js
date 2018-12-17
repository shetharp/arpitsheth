import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Slide from '../components/slide'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <>
    <Layout>
      <SEO
        title="Home"
        keywords={['arpit', 'sheth', 'shetharp', 'cornell', 'tech']}
      />

      <Slide
        id="intro"
        title="I&rsquo;m an interdisciplinary engineer with creator instincts and a knack for starting things."
        fluid={data.imgOne.childImageSharp.fluid}
        position="50% 0%"
        noBorder
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Slide>

      <Slide
        id="cornell"
        title="I recently graduated with an M.Eng in Computer Science from Cornell Tech."
        fluid={data.imgTwo.childImageSharp.fluid}
      >
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </Slide>
    </Layout>
  </>
)
export default IndexPage

// GraphQL fragment to load fluid responsive images
export const slideImage = graphql`
  fragment slideImage on File {
    childImageSharp {
      fluid(maxWidth: 4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
// GraphQL query to load the images based on the fragment
// See https://codebushi.com/using-gatsby-image/ for more info
export const pageQuery = graphql`
  query {
    imgOne: file(relativePath: { eq: "slides/intro.jpg" }) {
      ...slideImage
    }
    imgTwo: file(relativePath: { eq: "slides/campus.jpg" }) {
      ...slideImage
    }
  }
`
