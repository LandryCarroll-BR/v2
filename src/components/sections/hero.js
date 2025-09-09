import React, { useContext } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Icon from '../icons/icon'
import { Link } from 'gatsby'
import { GlobalStateContext } from '../../context/GlobalContextProvider'

const StyledHeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  padding: 2em 0 0 0;
  @media (min-width: 769px) {
    padding: 0;
  }
  .container {
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    grid-gap: 12px;

    @media (min-width: 769px) {
      grid-gap: 42px;
      justify-content: space-between;
      flex-direction: row;
    }

    @media (min-width: 1200px) {
    }
  }
`
const StyledPic = styled.div`
  max-width: 100px;

  @media (min-width: 380px) {
    max-width: 140px;
  }

  @media (min-width: 734px) {
    max-width: 200px;
  }

  @media (min-width: 1200px) {
    max-width: 300px;
  }
  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    overflow: hidden;
    border-radius: 100vh;
    cursor: pointer;
    transition: 200ms;
  }

  .wrapper:hover {
    filter: brightness(1.2);
  }

  .wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: var(--gradient);
    mix-blend-mode: multiply;
    overflow: hidden;
    transition: var(--transition);
    overflow: hidden;
    border-radius: 100vh;
  }

  .img {
    position: relative;
    filter: grayscale(100%);
    z-index: 1;
    border: 2px solid #fff;
    border-radius: 100vh;
    transition: 200ms;
  }
`
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h1 {
    margin: 22px 0 0px 0px;
    color: ${(props) =>
      props.colorTheme === 'designer' ? 'var(--purple)' : 'var(--cyan)'};
    font-size: clamp(var(--fz-md), 5vw, var(--fz-xl));
    font-weight: 400;
    text-align: center;
    transition: var(--transition);

    @media (min-width: 769px) {
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
    font-size: clamp(32px, 8vw, 50px);
    @media (min-width: 769px) {
      margin: 20px 0 0 0;
      text-align: left;
    }
    @media (min-width: 1200px) {
      font-size: clamp(40px, 8vw, 80px);
    }
  }

  .heading-period {
    color: ${(props) =>
      props.colorTheme === 'designer' ? 'var(--purple)' : 'var(--cyan)'};
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

  .inline-link {
    ${({ theme }) => theme.mixins.inlineLink}
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
    ${({ theme }) => theme.mixins.smallButton};

    @media (min-width: 350px) {
      ${({ theme }) => theme.mixins.bigButton};
    }
  }

  .gitHub,
  .dribbble {
    ${({ theme }) => theme.mixins.smallButton};
    padding: 0.6rem 0.8rem !important;

    @media (min-width: 350px) {
      ${({ theme }) => theme.mixins.bigButton};
      padding: 1.125rem 1.75rem !important;
    }

    & svg {
      color: inherit;
      height: 18px;
      width: auto;
      margin-right: 8px;
    }
  }
`

const getExternalLink = (state) => {
  if (!state) {
    return (
      <Link className="gitHub" to="https://github.com/LandryCarroll-BR">
        <Icon name="github" />
        GitHub
      </Link>
    )
  }

  if (state.theme === 'designer') {
    return (
      <Link className="dribbble" to="https://dribbble.com/Carroll025390">
        <Icon name="dribbble" />
        Dribbble
      </Link>
    )
  } else {
    return (
      <Link className="gitHub" to="https://github.com/LandryCarroll-BR">
        <Icon name="github" />
        GitHub
      </Link>
    )
  }
}

const Hero = () => {
  const state = useContext(GlobalStateContext)

  return (
    <StyledHeroSection>
      <div className="container">
        <StyledPic colorTheme={state ? state.theme : 'developer'}>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.webp"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
        <StyledContent colorTheme={state ? state.theme : 'developer'}>
          <h1>Hi, my name is</h1>
          <h3 className="big-heading">
            Landry Carroll<span className="heading-period">.</span>
          </h3>
          <p>
            I'm a web developer with a passion for solving problems with modern software, specializing in Typescript applications,
            and fueled by an insatiable thirst for learning and coffee. I Currently build exceptional digital experiences at <a className='inline-link' href='https://www.fairwinds.org' target='_blank'><em>FAIRWINDS</em> Credit Union</a>.
          </p>
          <div className="wrapper">
            <a className="portfolio" href="/#featured">
              My Portfolio
            </a>
            {getExternalLink(state)}
          </div>
        </StyledContent>
      </div>
    </StyledHeroSection>
  )
}

export default Hero
