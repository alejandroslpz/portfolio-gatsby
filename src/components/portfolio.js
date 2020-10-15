import React, { useState } from "react"
import Projects from "./projects"
import usePortfolio from "../hooks/usePortfolio"
import styled from "@emotion/styled"

const Enlace = styled.p`
  color: black;
`

const Portfolio = () => {
  // State for the filters
  const [filterprojects, setFilter] = useState("all")
  //  All projects
  const data = usePortfolio()
  // Filter
  const reactProjects = data.filter(project => project.type === "React")
  const reactNativeProjects = data.filter(
    project => project.type === "ReactNative"
  )
  const othersProjects = data.filter(project => project.type === "Others")

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="title is-2 has-text-centered">Portfolio</h2>
        <nav
          className="breadcrumb is-medium is-centered"
          aria-label="breadcrumbs"
        >
          <ul>
            <li>
              <a onClick={() => setFilter("all")}>
                <Enlace>All</Enlace>
              </a>
            </li>
            <li>
              <a onClick={() => setFilter("react")}>
                <Enlace>React</Enlace>
              </a>
            </li>
            <li>
              <a onClick={() => setFilter("reactNative")}>
                <Enlace>React Native</Enlace>
              </a>
            </li>
            <li>
              <a onClick={() => setFilter("others")}>
                <Enlace>Others</Enlace>
              </a>
            </li>
          </ul>
        </nav>
        <div className="columns is-multiline mt-4">
          {filterprojects === "all" ? (
            <>
              {data.map(project => (
                <Projects key={project.id} project={project} />
              ))}
            </>
          ) : (
            <>
              {filterprojects === "react" ? (
                <>
                  {reactProjects.map(project => (
                    <Projects key={project.id} project={project} />
                  ))}
                </>
              ) : (
                <>
                  {filterprojects === "reactNative" ? (
                    <>
                      {reactNativeProjects.map(project => (
                        <Projects key={project.id} project={project} />
                      ))}
                    </>
                  ) : (
                    <>
                      {othersProjects.map(project => (
                        <Projects key={project.id} project={project} />
                      ))}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
