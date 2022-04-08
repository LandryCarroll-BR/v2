import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

const StyledContactSection = styled.section`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .section-title {
    margin: 0 auto 1em auto;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      right: 100%;
      width: 80%;
      margin-right: 70px;
      height: 1px;
      transition: var(--transition);
      background-color: ${props =>
        props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};

      @media (max-width: 500px) {
        width: 60px;
      }
      @media (max-width: 480px) {
        display: none;
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 80%;
      margin-left: 70px;
      height: 1px;
      transition: var(--transition);
      background-color: ${props =>
        props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
      @media (max-width: 500px) {
        width: 60px;
      }
      @media (max-width: 480px) {
        display: none;
      }
    }
  }

  .description {
    max-width: 580px;
    margin: 0 auto 2em auto;
  }

  .contact-button {
    ${({ theme }) => theme.mixins.bigButton}
    width: fit-content;
    margin: 0 auto;
  }
`

const Contact = () => {
  const state = useContext(GlobalStateContext)

  return (
    <StyledContactSection colorTheme={state.theme} id="contact">
      <h2 className="section-title">Contact</h2>
      <p className="description">
        If you’re looking for a new addition to the team, a fellow human needing
        help with a new project, or just someone who feels like saying hello,
        then feel free to send me an email! 👋
      </p>
      <a className="contact-button" href="mailto:hello@landrycarroll.com">
        Say Hello
      </a>
    </StyledContactSection>
  )
}

export default Contact
