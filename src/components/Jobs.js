import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Jobs = () => {
  const {
    allStrapiJobs: { nodes: jobs },
  } = useStaticQuery(graphql`
    {
      allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
        nodes {
          strapiId
          company
          date
          position
          desc {
            id
            name
          }
        }
      }
    }
  `)
  const [value, setValue] = useState(0)
  const { company, position, date, desc } = jobs[value]
  return (
    <section className="section jobs">
      <Title title="Experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job information */}
        <article className="job-info">
          <h3>{position}</h3>
          {/* <h5>{company}</h5> */}
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <div className="center-btn">
        {/* <AniLink cover to="/about" bg="#52d1da" className="btn">
          More info
        </AniLink> */}
        {/* <Link to="/about" className="btn center-btn">
          More info
        </Link> */}
      </div>
    </section>
  )
}

export default Jobs
