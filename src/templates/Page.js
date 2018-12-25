import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

/* ==================================================
 *  Styles
================================================== */

/* ==================================================
 *  Render Component
================================================== */
function Page({ data }) {
  const pageData = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{pageData.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageData.html }} />
      </div>
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
