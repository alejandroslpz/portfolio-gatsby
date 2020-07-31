import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useFormik } from "formik"
import * as Yup from "yup"

const ContactBox = styled.div`
  -webkit-box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 20px -2px rgba(0, 0, 0, 0.75);
  background-color: white;
  border: 0.5px;
`

const ContactForm = () => {
  const [emailsubmit, setEmail] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),

    onSubmit: values => {
      setEmail(true)
      setTimeout(() => {
        setEmail(false)
      }, 6000)

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error))
    },
  })

  const { emailImage, emailGif } = useStaticQuery(graphql`
    query {
      emailImage: file(relativePath: { eq: "mail1.png" }) {
        publicURL
      }
      emailGif: file(relativePath: { eq: "mail.gif" }) {
        publicURL
      }
    }
  `)

  return (
    <div className="column is-6-desktop">
      <ContactBox>
        <h1 className="title is-3 has-text-centered has-background-danger has-text-white py-2">
          Contact
        </h1>
        <div className="columns">
          <div className="column is-6">
            <div
              css={css`
                padding: 5px 35px;
              `}
            >
              <img
                src={emailsubmit ? emailGif.publicURL : emailImage.publicURL}
                alt="Contact Me Email"
                className="p-4"
              />
            </div>
          </div>
          <div className="column is-6">
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="mx-4 mb-3"
              onSubmit={formik.handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              {formik.touched.name && formik.errors.name ? (
                <span className="tag is-warning mb-1">
                  {formik.errors.name}
                </span>
              ) : null}
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={formik.errors.name ? `input is-danger` : `input`}
                    placeholder="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="user" />
                  </span>
                </p>
              </div>
              {formik.touched.email && formik.errors.email ? (
                <span className="tag is-warning my-1">
                  {formik.errors.email}
                </span>
              ) : null}
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className={
                      formik.errors.email ? `input is-danger` : `input`
                    }
                    placeholder="example@mail.com"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="envelope" />
                  </span>
                </p>
              </div>
              {formik.touched.message && formik.errors.message ? (
                <span className="tag is-warning my-1">
                  {formik.errors.message}
                </span>
              ) : null}
              <div className="field">
                <p className="control has-icons-left">
                  <textarea
                    id="message"
                    name="message"
                    className={
                      formik.errors.message
                        ? `textarea input is-danger`
                        : `textarea input`
                    }
                    placeholder="Type some text"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  <span className="icon is-small is-left">
                    <FontAwesomeIcon icon="comment" />
                  </span>
                </p>
              </div>
              <div className="field">
                <div className="control">
                  <button
                    id="submit-but"
                    type="submit"
                    className="button is-info"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ContactBox>
    </div>
  )
}

export default ContactForm
