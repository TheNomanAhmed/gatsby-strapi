import React from "react"
// import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithub, FaShareSquare, FaFigma, FaMobileAlt } from "react-icons/fa"
const Project = ({
  description,
  title,
  github,
  stack,
  url,
  image,
  index,
  prototypeDesign,
  prototypeLink,
}) => {
  // console.log(image)
  return (
    <article className="project">
      <div className="project-img">
        <Image fluid={image.childImageSharp.fluid} />
      </div>

      <div className="project-info">
        {/* <span className="project-number">0{index}.</span> */}
        <div className="project-title">
          <h3>{title}</h3>
          <div className="project-links">
            {prototypeDesign && (
              <a href={prototypeDesign} target="_blank">
                <FaFigma size={20} className="project-icon" />
              </a>
            )}
            {prototypeLink && (
              <a href={prototypeLink} target="_blank">
                <FaMobileAlt size={20} className="project-icon" />
              </a>
            )}
            {github && (
              <a href={github} target="_blank">
                <FaGithub size={20} className="project-icon" />
              </a>
            )}
            {url && (
              <a href={url} target="_blank">
                <FaShareSquare size={20} className="project-icon" />
              </a>
            )}
          </div>
        </div>

        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return (
              <span key={item.id} className={`${item.title}`}>
                {item.title}
              </span>
            )
          })}
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {}

export default Project
