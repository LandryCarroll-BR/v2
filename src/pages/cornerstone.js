import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ImageGrid from "../components/imageGrid";

// markup
const cornerstone = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <ImageGrid
        title="Cornerstone"
        content={data.content}
        minWidth="clamp(200px, 100%, 1000px)"
      />
    </Layout>
  );
};

export default cornerstone;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    content: allFile(filter: { absolutePath: { regex: "/cornerstone/" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
