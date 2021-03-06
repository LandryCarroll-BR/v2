import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ImageGrid from "../components/imageGrid";

// markup
const logos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <ImageGrid
        title="Logos"
        content={data.content}
        minWidth="clamp(120px, 32vw, 300px)"
      />
    </Layout>
  );
};

export default logos;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    content: allFile(filter: { absolutePath: { regex: "/logos/" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
