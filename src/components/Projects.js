import React from "react"
import Title from "./Title"
import Project from "./Project"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <div className="center-btn">
          <AniLink cover to="/projects" bg="#52d1da" className="btn">
            Projects
          </AniLink>
          {/* <Link to="/projects" className="btn">
            
            Projects
          </Link> */}
        </div>
      )}
    </section>
  )
}

export default Projects
