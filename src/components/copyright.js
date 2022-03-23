import React from "react"
import Side from "./side"
import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 100;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--slate);
  }

  span {
    margin: 20px auto;
    padding: 10px;
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    color: var(--slate);
  }
`

const Copyright = () => {
  return (
    <Side orientation={"left"}>
      <StyledWrapper>
        <span>© 2022 Landry Carroll</span>
      </StyledWrapper>
    </Side>
  )
}

export default Copyright
