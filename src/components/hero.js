import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
import Typical from "react-typical"
import styled from "@emotion/styled"

const Phrase = styled.p`
  position: absolute;
  max-width: 350px;
  top: 10%;
  margin: 0 20%;
  font-family: "Source Code Pro", monospace;
  font-size: 15px;
  font-weight: bold;

  @media (min-width: 400px) {
    font-size: 18px;
  }

  @media (min-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 600px) {
    font-size: 27px;
  }

  @media (min-width: 769px) {
    font-size: 18px;
  }

  @media (min-width: 900px) {
    font-size: 22px;
  }

  @media (min-width: 1000px) {
    font-size: 26px;
  }

  @media (min-width: 1250px) {
    font-size: 30px;
  }
`

const Hero = () => {
  const { monitor } = useStaticQuery(graphql`
    query {
      monitor: file(relativePath: { eq: "monitor.png" }) {
        publicURL
      }
    }
  `)

  return (
    <section id="hero" className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div
              className="column is-12-mobile is-6-tablet has-text-centered"
              css={css`
                margin: auto 0;
              `}
            >
              <h1 className="title">Alejandro Sánchez</h1>
              <h2 className="subtitle has-text-centered">
                Front - End Developer
              </h2>
              <a className="button is-danger" href="#contact">
                <strong>Contact Me</strong>
              </a>
            </div>
            <div className="column is-12-mobile is-6-tablet">
              <div className="monitor container">
                <Phrase>
                  <Typical
                    loop={Infinity}
                    wrapper="p"
                    steps={[
                      "Success in management requires learning as fast as the world is changing.",
                      1000,
                    ]}
                  />
                </Phrase>
                <img
                  src={monitor.publicURL}
                  alt="Monitor"
                  css={css`
                    position: relative;
                  `}
                />
                <div className="columns">
                  <div className="column">
                    <p className="phrase"></p>
                  </div>
                </div>
                <div className="columns">
                  <div className="monitor-icon animate__animated animate__zoomIn animate__delay-4s">
                    <i className="fas fa-globe-americas"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
