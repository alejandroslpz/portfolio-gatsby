import React from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/core"
import Header from "./header"
import Footer from "./footer"
import "../components/fontAwesome"

const Layout = ({ children }) => {
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
      {children}
      <Footer />
    </>
  )
}

export default Layout
