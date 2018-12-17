import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Slide from '../components/slide'
import SEO from '../components/seo'


const IndexPage = ({ data }) => (
  <>
    {/* <Layout> */}
      <SEO title="Home" keywords={['arpit', 'sheth', 'shetharp', 'cornell', 'tech']} />
    {/* </Layout> */}
    <Slide fluid={data.imgOne.childImageSharp.fluid} />
    <Slide fluid={data.imgTwo.childImageSharp.fluid} />
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
