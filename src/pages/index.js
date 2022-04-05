import * as React from "react"
import Hero from "../components/sections/hero"
import Layout from "../components/layout"
import Featured from "../components/sections/featured"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"

const Home = ({ location }) => {
  return (
    <Layout location={location}>
      <Hero />
      <Featured />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default Home
