import React from "react"
import Image from "gatsby-image"
// import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "hero-image.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h2>noman ahmed.</h2>
            <h4 className="tagline">
              I like to design and build applications, and everything that's
              associated with it.
            </h4>
            <div className="hero-btn">
              <AniLink cover to="/projects" bg="#52d1da" className="btn">
                See Projects
              </AniLink>
            </div>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
