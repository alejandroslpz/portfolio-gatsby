import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Ul = styled.ul`
  z-index: 10;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #4a4a4a;
    position: fixed;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 50%;
    transition: ${({ open }) =>
      open ? "transform 0.3s ease-in-out" : "transform 0.1s ease-in-out"};

    li {
      font-size: 25px;
      text-align: center;
    }
  }
`

const NavigationLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const ResponsiveNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <NavigationLink to={"/"}>Home</NavigationLink>
      </li>
      <li>
        <NavigationLink to={"/#about"}>About</NavigationLink>
      </li>
      <li>
        <NavigationLink to={"/#skills"}>Skills</NavigationLink>
      </li>
      <li>
        <NavigationLink to={"/#portfolio"}>Portfolio</NavigationLink>
      </li>
      <li>
        <NavigationLink to={"/#contact"}>Contact</NavigationLink>
      </li>
    </Ul>
  )
}

export default ResponsiveNav
