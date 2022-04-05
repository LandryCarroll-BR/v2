import React, { useContext } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Icon from "../icons/icon"
import { Link } from "gatsby"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  height: 100vh;
  flex-direction: column;
  grid-gap: 12px;

  @media (min-width: 734px) {
    grid-gap: 42px;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
    flex-direction: row;
  }
`
const StyledPic = styled.div`
  ${({ theme }) => theme.mixins.overlay};
  max-width: 140px;
  border-radius: 100vh !important;
  cursor: initial;

  * {
    border-radius: 100vh !important;
  }

  .img {
    border-width: 2px;
  }

  @media (min-width: 734px) {
    max-width: 200px;
  }

  @media (min-width: 1200px) {
    max-width: 300px;
    width: 100%;
  }
`
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 22px 0 0px 0px;
    color: ${props =>
      props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    font-size: clamp(var(--fz-md), 5vw, var(--fz-xl));
    font-weight: 400;
    text-align: center;
    transition: var(--transition);

    @media (min-width: 1200px) {
      margin: 0 0 0px 4px;
      text-align: left;
    }
  }

  h3 {
    margin-top: 12px;
    color: var(--white);
    line-height: 0.9;
    font-weight: 500;
    text-align: center;

    @media (min-width: 1200px) {
      margin: 20px 0 0 0;
      text-align: left;
    }
  }

  .heading-period {
    color: ${props =>
      props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    transition: var(--transition);
  }

  p {
    margin: 30px 0 0 0;
    max-width: 550px;
    color: var(--slate);
    font-size: var(--fz-sm);

    @media (min-width: 1200px) {
      margin: 40px 0 0 0;
      font-size: var(--fz-md);
      max-width: 630px;
    }
  }

  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 50px 0 0 0;
    height: fit-content;
    grid-gap: 18px;
  }

  .portfolio {
    ${({ theme }) => theme.mixins.bigButton};
  }

  .gitHub {
    ${({ theme }) => theme.mixins.bigButton};
    padding: 1.125rem 1.75rem !important;

    & svg {
      color: inherit;
      height: 18px;
      width: auto;
      margin-right: 4px;
    }
  }
`

const Hero = () => {
  const state = useContext(GlobalStateContext)

  return (
    <StyledHeroSection>
      <StyledPic colorTheme={state.theme}>
        <div className="wrapper">
          <StaticImage
            className="img"
            src="../../images/me.png"
            width={500}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Headshot"
          />
        </div>
      </StyledPic>
      <StyledContent colorTheme={state.theme}>
        <h1>Hi, my name is</h1>
        <h3 className="big-heading">
          Landry Carroll<span className="heading-period">.</span>
        </h3>
        <p>
          I’m a designer-gone-developer who started coding back in 2020. I have
          experience working as a web developer Intern for Entrepreneurs Across
          Borders, some freelance work, along with some personal projects, of
          course. My goal is to keep learning and improving my various skills so
          I can make more impactful products and applications.
        </p>
        <div className="wrapper">
          <Link className="portfolio">My Portfolio</Link>
          <Link className="gitHub">
            <Icon name="GitHub" />
            GitHub
          </Link>
        </div>
      </StyledContent>
    </StyledHeroSection>
  )
}

export default Hero
