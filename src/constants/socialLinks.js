import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    label: "facebok logo",
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/TheNomanAhmed",
  },
  {
    id: 2,
    label: "LinkedIn Logo",
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/TheNomanAhmed",
  },
  {
    id: 3,
    label: "Dribbble logo",
    icon: <FaDribbbleSquare className="social-icon"></FaDribbbleSquare>,
    url: "https://www.dribbble.com/TheNomanAhmed",
  },
  {
    id: 4,
    label: "Behance logo",
    icon: <FaBehanceSquare className="social-icon"></FaBehanceSquare>,
    url: "https://www.behance.com/TheNomanAhmed",
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
