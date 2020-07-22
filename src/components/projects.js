import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import urlSlug from "url-slug"

const Card = styled.div`
  position: absolute;
  background-color: #4a4a4a;
  width: 100%;
  height: 100%;
  top: 0;
  transform: scale(1.3);
  opacity: 0;
  transition: 0.4s linear;

  &:hover {
    opacity: 1;
    transform: scale(1);
    transition: 0.4s linear;
  }
`

const Projects = ({ project }) => {
  const { name, image, description } = project

  return (
    <div className="column is-4-tablet">
      <div
        className="container"
        css={css`
          position: relative;
          overflow: hidden;
        `}
      >
        <Image
          fluid={image.sharp.fluid}
          css={css`
            height: 300px;
          `}
        />
        <Card>
          <div className="container has-text-centered">
            <div
              className="has-text-white has-text-centered"
              css={css`
                margin-top: 50px;
              `}
            >
              <h2 className="title is-5 has-text-white">{name}</h2>
              <h3 className="title is-6 has-text-white">About this project</h3>
              <p className="mb-5">{description}</p>
              <Link to={urlSlug(name)}>
                <button className="button is-small is-danger">
                  More Details
                </button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Projects
