import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ImageGrid from "../components/imageGrid";

// markup
const marinelife = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <ImageGrid
        title="Marine Life"
        content={data.content}
        minWidth="clamp(200px, 100%, 1000px)"
      />
    </Layout>
  );
};

export default marinelife;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    content: allFile(filter: { absolutePath: { regex: "/marinelife/" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
