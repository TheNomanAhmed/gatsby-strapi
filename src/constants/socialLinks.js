import React from "react"
import { FaLinkedin, FaBehance, FaTwitter, FaGithub } from "react-icons/fa"

const data = [
  {
    id: 1,
    label: "github logo",
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/TheNomanAhmed",
  },
  {
    id: 2,
    label: "LinkedIn Logo",
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/TheNomanAhmed",
  },
  {
    id: 4,
    label: "Behance logo",
    icon: <FaBehance className="social-icon"></FaBehance>,
    url: "https://www.behance.net/TheNomanAhmed",
  },
  {
    id: 5,
    label: "Twitter logo",
    icon: <FaTwitter className="social-icon"></FaTwitter>,
    url: "https://www.twitter.com/TheNomanAhmed",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} aria-label={link.label} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
