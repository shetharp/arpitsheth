import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Slide = ({ siteTitle }) => (
    <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "campus.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)

// Slide.propTypes = {
//   title: PropTypes.string,
// }

// Slide.defaultProps = {
//   title: '',
// }

export default Slide
