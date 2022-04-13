import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ImageGrid from "../components/imageGrid";

// markup
const esrg = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <ImageGrid title="ESRG" content={data.content} />
    </Layout>
  );
};

export default esrg;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    content: allFile(filter: { absolutePath: { regex: "/esrg/" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
