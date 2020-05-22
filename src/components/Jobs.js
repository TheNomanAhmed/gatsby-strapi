import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

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
          <h5>{company}</h5>
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
        <Link to="/about" className="btn center-btn">
          More info
        </Link>
      </div>
    </section>
  )
}

export default Jobs
