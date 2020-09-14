import React from "react"
// import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id} className="blog">
      <article className="card">
        <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          {/* <p className="blog-card-desc">{desc.substring(0, 250)}</p> */}
          <p className="blog-card-desc">
            {desc.length > 200 ? `${desc.substring(0, 200)} ...` : desc}
          </p>
          <div className="blog-footer">
            <p className={`category ${category}`}>{category}</p>
            <div className="blog-card-date">{date}</div>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {}

export default Blog
