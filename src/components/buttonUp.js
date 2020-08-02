import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Button = styled.div`
  position: fixed;
  z-index: 5;
  right: 10px;
  bottom: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: hsl(348, 100%, 61%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  text-align: center;

  &:active {
    background: hsl(348, 100%, 41%);
  }

  @media (min-width: 768px) {
    right: 30px;
    bottom: 20px;
  }
`

const Icon = styled(FontAwesomeIcon)`
  margin-top: 30%;
`

const ButtonUp = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button onClick={() => scrollTop()}>
      <Icon icon="arrow-up" />
    </Button>
  )
}

export default ButtonUp
