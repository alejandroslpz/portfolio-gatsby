import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "@emotion/styled"

const IconSkill = styled(FontAwesomeIcon)`
  font-size: 64px;
  color: whitesmoke;
  margin: 10px 0 20px 0;
`

const Box = styled.div`
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
  transition: 0.2s linear;
  border-radius: 6px;

  &:hover {
    transform: scale(1.07);
    transition: 0.2s linear;
  }
`

const Cards = () => {
  return (
    <div className="pt-2">
      <div className="columns">
        <div className="column is-12-mobile is-4-desktop">
          <Box>
            <div className="box has-background-grey-dark">
              <div className="container has-text-white has-text-centered">
                <IconSkill icon={["fab", "js-square"]} />
                <h3 className="title is-5  has-text-white ">JavaScript</h3>
                <ul>
                  <li>ES6+</li>
                  <li>REST, GraphQL</li>
                  <li>MERN Stack</li>
                </ul>
              </div>
            </div>
          </Box>
        </div>
        <div className="column is-12-mobile is-4-desktop">
          <Box>
            <div className="box has-background-grey-dark">
              <div className="container has-text-white has-text-centered">
                <IconSkill icon={["fab", "react"]} />
                <h3 className="title is-5  has-text-white ">React</h3>
                <ul>
                  <li>Gatsby</li>
                  <li>NEXT</li>
                  <li>Redux</li>
                </ul>
              </div>
            </div>
          </Box>
        </div>
        <div className="column is-12-mobile is-4-desktop">
          <Box>
            <div className="box has-background-grey-dark">
              <div className="container has-text-white has-text-centered">
                <IconSkill icon="paint-brush" />
                <h3 className="title is-5  has-text-white ">CSS</h3>
                <ul>
                  <li>Style Components</li>
                  <li>Bulma</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
            </div>
          </Box>
        </div>
      </div>
      <div className="columns">
        <div className="column is-12">
          <Box>
            <div className="box has-background-grey-dark">
              <div className="container has-text-white has-text-centered">
                <IconSkill icon="tools" />
                <h3 className="title is-5 has-text-white">Tools</h3>
                <div className="container">
                  <div className="columns">
                    <div className="column">
                      <ul>
                        <li>Git</li>
                        <li>Netlify</li>
                        <li>Heroku</li>
                      </ul>
                    </div>
                    <div className="column">
                      <ul>
                        <li>Postman</li>
                        <li>Compass</li>
                        <li>VSCode</li>
                      </ul>
                    </div>
                    <div className="column">
                      <ul>
                        <li>Figma</li>
                        <li>XD</li>
                        <li>Mockups</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Cards
