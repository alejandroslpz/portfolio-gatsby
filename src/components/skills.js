import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { css } from "@emotion/core"
import Cards from "./cards"

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="title is-2 has-text-centered">Skills</h2>
        <div className="columns has-text-centered mb-6">
          <div className="column is-12-mobile is-6-tablet has-text-centered">
            <div className="mt-2">
              <FontAwesomeIcon
                icon="award"
                css={css`
                  font-size: 200px;
                `}
              />
            </div>
          </div>
          <div className="column is-6">
            <div className="content">
              <p>Javascript</p>
              <progress className="progress is-danger" value="70" max="100">
                70%
              </progress>
              <p>CSS</p>
              <progress className="progress is-danger" value="60" max="100">
                60%
              </progress>
              <p>Design</p>
              <progress className="progress is-danger" value="50" max="100">
                50%
              </progress>
            </div>
          </div>
        </div>
        <Cards />
      </div>
    </section>
  )
}

export default Skills
