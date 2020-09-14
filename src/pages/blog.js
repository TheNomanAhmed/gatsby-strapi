import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
import "../css/main.scss"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog" description="Blog page of Noman Ahmed" />

      <section className="blog-page">
        <Blogs blogs={blogs} title="Blogs" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        category
        slug
        content
        date(formatString: "MMMM Do,YYYY")
        id
        title
        desc
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default Blog
