import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import theme, { mediaq } from '../utils/theme';
import Layout from '../components/Layout';

/* ==================================================
 *  Styles
================================================== */
const Article = styled.article`
  padding-top: 24px;
  ${mediaq.sm`padding-top: 56px;`}
  ${mediaq.md`padding-top: 80px;`}
`;

const Title = styled.h1`
  && {
    font-weight: bold;
  }
`;

const ArticleBody = styled.section`
  a {
    text-decoration: none;
    border-bottom: 1px solid ${theme.colors.primaryLite};
    ${mediaq.md`border-width: 2px;`}
  }
`;

/* ==================================================
 *  Render Component
================================================== */
function Page({ data }) {
  const pageData = data.markdownRemark;
  return (
    <Layout>
      <Article>
        <Title>{pageData.frontmatter.title}</Title>
        <hr />
        <ArticleBody dangerouslySetInnerHTML={{ __html: pageData.html }} />
      </Article>
    </Layout>
  );
}

/* ==================================================
 *  Queries
================================================== */
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Page;
