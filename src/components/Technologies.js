import React from "react"
import Title from "./Title"
// SVG Logos
import prismic from "../assets/prismic.svg"
import contentful from "../assets/contentful.svg"
import gatsby from "../assets/gatsby.svg"
import netlify from "../assets/netlify.svg"
import next from "../assets/next.svg"
import node from "../assets/node.svg"
import sanity from "../assets/sanity.svg"
import strapi from "../assets/strapi.svg"
import vercel from "../assets/vercel.svg"
import heroku from "../assets/heroku.svg"
import reactjs from "../assets/reactjs.svg"
import figma from "../assets/figma.svg"
import tailwindcss from "../assets/tailwindcss.svg"
import xd from "../assets/xd.svg"
import illustrator from "../assets/illustrator.svg"

const Technologies = () => {
  return (
    <section className="section ">
      <div className="section-center ">
        <Title title="Technologies i use" />
        <div className="all-cards ">
          <div className="tech-card-wrapper">
            {/* <div className="css-1jjzhxu epr1bjy1">
              <div></div>
              <div></div>
              <div></div>
            </div> */}
            <div className="tech-card-content">
              <h3>Data</h3>
              <a
                href="https://www.strapi.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={strapi} alt="Strapi Headless CMS Service logo" />
              </a>
              <a
                href="https://prismic.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={prismic} alt="Prismic - CMS logo" />
              </a>

              <a
                href="https://www.contentful.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={contentful} alt="Contentful - API-First CMS logo" />
              </a>
              <a
                href="https://www.sanity.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={sanity} alt="Sanity logo" />
              </a>
            </div>
          </div>
          <div className="tech-card-wrapper">
            <div className="tech-card-content">
              <h3>Tools</h3>
              <a
                href="https://www.gatsbyjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gatsby} alt="GatsbyJS logo" />
              </a>
              <a
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={reactjs} alt="React logo" />
              </a>
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={next} alt="Next.js logo" />
              </a>
              <a
                href="https://nodejs.org/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={node} alt="Node.js logo" />
              </a>
            </div>
          </div>
          <div className="tech-card-wrapper">
            <div className="tech-card-content">
              <h3>Deploy</h3>
              <a
                href="https://www.netlify.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={netlify} alt="Netlify - CMS logo" />
              </a>
              <a
                href="https://zeit.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={vercel} alt="ZEIT - Static Hosting Service logo" />
              </a>
              <a
                href="https://zeit.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={heroku} alt="ZEIT - Static Hosting Service logo" />
              </a>
              <a
                href="https://aws.amazon.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.prismic.io/jamchefs%2F2151f6a1-4803-4b9b-96bd-df591c8c4f94_logo_amazon.svg?auto=compress,format"
                  alt="Amazon Web Services logo"
                />
              </a>
            </div>
          </div>

          {/* Design Logos */}

          <div className="tech-card-wrapper">
            <div className="tech-card-content">
              <h3>Design</h3>
              <a
                href="https://adobe.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={xd} alt="Adobe XD" />
              </a>
              <a
                href="https://adobe.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={illustrator} alt="Adobe Illustrator" />
              </a>
              <a
                href="https://www.Figma.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={figma} alt="Figma Logo" />
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tailwindcss} alt="Tailwind CSS" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies
