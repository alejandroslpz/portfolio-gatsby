import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Box = styled.div`
  background-color: hsl(0, 0%, 94%) !important;
`

const Slide = styled(Image)`
  max-width: 700px;
`

const Carousel = styled.div`
  padding-top: 50px;
  max-width: 700px;
`

export const query = graphql`
  query($id: String!) {
    allStrapiProjects(filter: { id: { eq: $id } }) {
      nodes {
        Name
        Description
        Resume
        Site
        Repository
        Img: Image {
          sharp: childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        Categories {
          categories {
            Name
          }
        }
      }
    }
  }
`

const Project = ({
  data: {
    allStrapiProjects: { nodes },
  },
}) => {
  const {
    Name,
    Description,
    Categories,
    Img,
    Resume,
    Site,
    Repository,
    Examples,
  } = nodes[0]

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Layout>
      <main>
        <section className="section">
          <div className="container">
            <h2 className="title is-1">{Name}</h2>
            <div className="tile is-ancestor">
              <div className="tile is-5 is-vertical is-parent">
                <Box className="tile is-child box">
                  <p className="title">About the project</p>
                  <p>{Description}</p>
                </Box>
                <Box className="tile is-child box">
                  <p className="title">Technologies</p>
                  <div className="tags">
                    {Categories[0].categories.map(categorie => (
                      <span
                        key={categorie.Name}
                        className="tag is-danger is-medium"
                      >
                        {categorie.Name}
                      </span>
                    ))}
                  </div>
                </Box>
                <Box className="tile is-child box">
                  <p className="title">{Name}</p>
                  <p className="mb-4">{Resume}</p>
                  <a href={Site}>
                    <button className="button is-info mr-3">
                      <span className="icon">
                        <FontAwesomeIcon icon="globe" />
                      </span>
                      <span>Visit Website</span>
                    </button>
                  </a>
                  <a href={Repository}>
                    <button className="button is-info">
                      <span className="icon">
                        <FontAwesomeIcon icon={["fab", "github"]} />
                      </span>
                      <span>Github</span>
                    </button>
                  </a>
                </Box>
              </div>
              <div className="tile is-parent">
                <Box className="tile is-child box">
                  <p className="title">Preview</p>
                  <Carousel className="mx-4">
                    <Slider {...settings}>
                      <Slide
                        key={Img.sharp.fluid.src}
                        fluid={Img.sharp.fluid}
                        alt="Ejemplo de Imagen"
                      />
                    </Slider>
                  </Carousel>
                </Box>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Project
