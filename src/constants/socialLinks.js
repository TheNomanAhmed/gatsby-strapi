import React from "react"
import {
  FaLinkedin,
  FaBehanceSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    label: "github logo",
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
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
    icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
    url: "https://www.behance.net/TheNomanAhmed",
  },
  {
    id: 5,
    label: "Twitter logo",
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
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
