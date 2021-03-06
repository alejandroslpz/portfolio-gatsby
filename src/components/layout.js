import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/core"
import Header from "./header"
import Footer from "./footer"
import ButtonUp from "./buttonUp"
import "../components/fontAwesome"

const Layout = ({ children }) => {
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 550) {
        setDisplay(true)
      } else {
        setDisplay(false)
      }
    })
  })

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: hsl(348, 100%, 61%);
            color: white;
          }

          html,
          body {
            scroll-behavior: smooth;
            background-color: #f8f9fa;
          }
        `}
      />
      <Helmet>
        <title>Alejandro Sánchez</title>
        <meta
          name="description"
          content="Sitio de presentación de Alejandro Sánchez"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"
          integrity="sha256-aPeK/N8IHpHsvPBCf49iVKMdusfobKo2oxF8lRruWJg="
          crossorigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        ></link>
      </Helmet>
      <Header />
      {display ? <ButtonUp /> : null}
      {children}
      <Footer />
    </>
  )
}

export default Layout
