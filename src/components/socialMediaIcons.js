import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Icons = styled(FontAwesomeIcon)`
  margin: 10px 13px;
  font-size: 40px;
  transition: 0.3s linear;
  color: #4a4a4a;

  &:hover {
    transform: scale(1.3);
    border-radius: 50%;
    transition: 0.3s linear;
  }
`

const SocialMediaIcons = () => {
  return (
    <div>
      <a href="https://linkedin.com/in/alejandroslpz/">
        <Icons
          icon={["fab", "linkedin-in"]}
          css={css`
            &:hover {
              color: #007bb5;
            }
          `}
        />
      </a>

      <a href="https://github.com/alejandroslpz">
        <Icons
          icon={["fab", "github"]}
          css={css`
            &:hover {
              color: #4a154b;
            }
          `}
        />
      </a>

      <a href="https://twitter.com/alee_slpz">
        <Icons
          icon={["fab", "twitter"]}
          css={css`
            &:hover {
              color: #1da1f2;
            }
          `}
        />
      </a>

      <a href="https://www.instagram.com/aleeslpz/">
        <Icons
          icon={["fab", "instagram"]}
          css={css`
            &:hover {
              color: #c32aa3;
            }
          `}
        />
      </a>
    </div>
  )
}

export default SocialMediaIcons
