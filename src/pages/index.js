import * as React from "react"
import { Link, graphql } from "gatsby"
import Hero from "../components/sections/hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Featured from "../components/sections/featured"
import Projects from "../components/sections/projects"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const designerData = data

  return (
    <Layout location={location} title={siteTitle}>
      <Hero />
      <Featured designerData={designerData} />
      <Projects />
    </Layout>
  )
}

export default Home
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/designer/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            tech
            cover {
              childImageSharp {
                gatsbyImageData(
                  width: 700
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            github
            external
          }
        }
      }
    }
  }
`
