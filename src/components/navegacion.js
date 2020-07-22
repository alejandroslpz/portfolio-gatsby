import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const Navegacion = () => {
  return (
    <div className="container">
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
        css={css`
          border-radius: 5px;
        `}
      >
        {/* <div className="navbar-brand"></div> */}
        <div className="navbar-menu">
          <div className="navbar-start ml-2">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/#about">
              About
            </Link>
            <Link className="navbar-item" to="/#skills">
              Skills
            </Link>
            <Link className="navbar-item" to="/#portfolio">
              Porfolio
            </Link>
          </div>

          {/*   <div className="navbar-end">
            <div className="navbar-item">
              <Link className="button is-danger mr-3" to="#contact">
                <strong>Blog</strong>
              </Link>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  )
}

export default Navegacion
