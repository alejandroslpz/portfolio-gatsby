import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import SocialMediaIcons from "./socialMediaIcons"

const AboutMe = () => {
  const { about } = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered px-6">
            <div className="content">
              <Image fluid={about.sharp.fluid} alt="About Me" />
            </div>
          </div>
          <div className="column">
            <div className="content">
              <h2 className="title is-2">About Me</h2>
              <h3 className="subtitle is-4">
                Hi!
                <span className="has-text-danger has-text-weight-semibold ml-2 ">
                  I'M Alejandro Sánchez
                </span>
              </h3>
              <div className="content">
                <p>
                  I'm a Front-end Developer. My favorite part of the day is say
                  "Hello World" when i wake up. Did you see it? -Yes, that's
                  true, it´s a bad joke...
                </p>
                <p>
                  My passion since I can remember is technology and web pages.
                  That is the reason i decided to study software development. I
                  really believe in "everybody can programming" but only one
                  kind of people can make dreams come true with code. I can help
                  people make their dreams come true with code.
                </p>
                <p>
                  I'm music lover, and one person that enjoys the "little
                  moments of life" well that's me!
                </p>
                <div className="content has-text-centered">
                  <SocialMediaIcons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
