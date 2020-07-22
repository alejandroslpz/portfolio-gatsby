import React from "react"
import Projects from "./projects"
import usePortfolio from "../hooks/usePortfolio"

const Portfolio = () => {
  //  All projects
  const data = usePortfolio()
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="title is-2 has-text-centered">Portfolio</h2>
        <div className="columns is-multiline mt-4">
          {data.map(project => (
            <Projects key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
