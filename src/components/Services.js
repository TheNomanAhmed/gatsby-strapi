import React from "react"
import Title from "./Title"
import services from "../constants/services"

const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="Services" />

      <div className="section-center services-center">
        {services.map(services => {
          const { id, icon, title, text } = services
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
