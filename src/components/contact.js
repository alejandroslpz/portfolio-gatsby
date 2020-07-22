import React from "react"
import SocialMediaIcons from "./socialMediaIcons"
import ContactForm from "./contactForm"

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <div className="content has-text-centered">
              <h1 className="title is-1">See you later</h1>
              <h4>Thank you for visiting me!</h4>
              <p>
                Hi! I hope my little resume has motivated you to contact me.
                Check out my repo in GitHub and my professional profile in
                Linkedin.
              </p>
              <SocialMediaIcons />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
