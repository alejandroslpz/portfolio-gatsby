import React from "react"
import Burger from "./burger"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color: #4a4a4a;
  border-radius: 0 0 10px 10px;

  .logo {
    padding: 15px 0;
  }
`

const Navigation = () => {
  return (
    <div className="container">
      <Nav>
        <div className="logo">
          <Link to={"/"}>
            <p className="title is-4 has-text-light">Aslpz</p>
          </Link>
        </div>
        <Burger />
      </Nav>
    </div>
  )
}

export default Navigation
