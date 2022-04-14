import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/sections/hero";
import Featured from "../components/sections/featured";
import Projects from "../components/sections/projects";
import Contact from "../components/sections/contact";
import Footer from "../components/sections/footer";
import About from "../components/sections/about";

// markup
const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo />
      <Hero />
      <About />
      <Featured />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
