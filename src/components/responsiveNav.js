import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
    height: 100vmax;
    width: 100%;
    padding: 40% 0;
    transition: ${({ open }) =>
      open ? "transform 0.3s ease-in-out" : "transform 0.1s ease-in-out"};

    li {
      margin: 5px 0;
      font-size: 25px;
      text-align: center;
    }
  }
`

const NavigationLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: hsl(0, 0%, 71%);
  }
`
const Icon = styled(FontAwesomeIcon)`
  margin-right: 7px;

  @media (min-width: 768px) {
    display: none;
  }
`

const ResponsiveNav = ({ open, setOpen }) => {
  const closeBurger = () => {
    setOpen(!open)
  }

  return (
    <Ul open={open}>
      <li>
        <NavigationLink to={"/"} onClick={e => closeBurger()}>
          <Icon icon="home" /> Home
        </NavigationLink>
      </li>
      <li>
        <NavigationLink to={"/#about"} onClick={e => closeBurger()}>
          <Icon icon="user" />
          About
        </NavigationLink>
      </li>
      <li>
        <NavigationLink to={"/#skills"} onClick={e => closeBurger(e)}>
          <Icon icon="award" />
          Skills
        </NavigationLink>
      </li>
      <li>
        <NavigationLink to={"/#portfolio"} onClick={e => closeBurger()}>
          <Icon icon="folder-open" />
          Portfolio
        </NavigationLink>
      </li>
      <li>
        <NavigationLink to={"/#contact"} onClick={e => closeBurger()}>
          <Icon icon="envelope" />
          Contact
        </NavigationLink>
      </li>
    </Ul>
  )
}

export default ResponsiveNav
