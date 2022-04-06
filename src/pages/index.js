import * as React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Hero from "../components/sections/hero"
import Layout from "../components/layout"
import Featured from "../components/sections/featured"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"

const Home = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo />
      <Hero />
      <Featured />
      <Projects />
      <Contact />
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
  }
`
