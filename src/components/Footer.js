import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h5>copyright&copy;{new Date().getFullYear()}</h5>
        <span>Noman Ahmed All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer
