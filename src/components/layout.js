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
      </Helmet>
      <Header />
      {display ? <ButtonUp /> : null}
      {children}
      <Footer />
    </>
  )
}

export default Layout
