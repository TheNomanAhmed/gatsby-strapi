import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import CodeBlock from "../components/CodeBlock"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"
import { FaArrowLeft } from "react-icons/fa"

const ComponentName = ({ data }) => {
  const { content, title, desc } = data.blog
  return (
    <Layout>
      <SEO title={title} description={desc} />
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={content} renderers={{ code: CodeBlock }} />
            <Link to="/blog" className="btn blog-btn">
              <FaArrowLeft /> Blogs
            </Link>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
    }
  }
`

export default ComponentName
