import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'


const StyledHeader = styled.div`
  background: palevioletred;
  margin-bottom: 1.45rem;
  
  div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    outline: 4px dashed white;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          css={`
            color: white;
            text-decoration: none;
          `}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
