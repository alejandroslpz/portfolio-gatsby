import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import AboutMe from "../components/aboutMe"
import Skills from "../components/skills"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Hero />
    <main>
      <AboutMe />
    </main>
    <Skills />
    <Portfolio />
    <Contact />
  </Layout>
)

export default IndexPage
