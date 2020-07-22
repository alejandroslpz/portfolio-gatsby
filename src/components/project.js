import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Box = styled.div`
  background-color: hsl(0, 0%, 94%) !important;
`

export const query = graphql`
  query($id: String!) {
    allStrapiProjects(filter: { id: { eq: $id } }) {
      nodes {
        Name
        Description
        Date
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
    Img,
    Categories,
    Resume,
    Site,
    Repository,
  } = nodes[0]
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
                      <span className="tag is-danger is-medium">
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
                  <Image fluid={Img.sharp.fluid} alt="Project Image" />
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
