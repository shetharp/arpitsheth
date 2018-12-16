import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Slide from '../components/slide'
import SEO from '../components/seo'


const IndexPage = ({ data }) => (
  <>
    {/* <Layout>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    </Layout> */}
    <Slide fluid={data.imgOne.childImageSharp.fluid} />
    <Slide fluid={data.imgTwo.childImageSharp.fluid} />
  </>
)
export default IndexPage


export const slideImage = graphql`
  fragment slideImage on File {
    childImageSharp {
      fluid(maxWidth: 4000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
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
