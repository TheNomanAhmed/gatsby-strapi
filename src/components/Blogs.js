import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {blogs.map(blog => {
          return <Blog key={blog.id} {...blog} />
        })}
      </div>
      {showLink && (
        <div className="center-btn">
          <AniLink cover to="/blog" bg="#52d1da" className="btn">
            Blogs
          </AniLink>
          {/* <Link to="/blog" className="btn">
            Blog
          </Link> */}
        </div>
      )}
    </section>
  )
}
export default Blogs
