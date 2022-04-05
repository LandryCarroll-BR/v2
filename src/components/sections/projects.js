import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
import Icon from "../icons/icon"

const StyledProjectsSection = styled.section`
  .section-title {
    ${({ theme }) => theme.mixins.sectionTitle}

    &::after {
      background-color: ${props =>
        props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    }
  }

  .project-container {
    ${({ theme }) => theme.mixins.resetList}
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  .project-card {
    ${({ theme }) => theme.mixins.boxShadow}
    padding: 1em 1.25em;
    display: flex;
    flex-direction: column;
    background-color: var(--blue);
    ${({ theme }) => theme.mixins.resetList}
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    position: relative;
    padding: 1em 1.25em;
    transition: 200ms transform;

    &:hover {
      transform: translateY(-10px);
      .wrapper {
        opacity: 1;
      }
    }

    .title,
    .description {
      margin-bottom: 1.5em;
    }

    .wrapper {
      position: relative;
      margin-bottom: 0.5em;
      cursor: pointer;
      border-radius: var(--border-radius);
      overflow: hidden;
      opacity: 0.8;
      transition: opacity var(--transition);

      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: ${props =>
          props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
        mix-blend-mode: multiply;
        transition: opcaity var(--transition);
      }
    }
  }

  .project-links {
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    width: 100%;

    a {
      width: 24px;
      margin: 0 14px 0 0;
      color: var(--slate);
      transition: var(--transition);
    }

    a:hover {
      color: ${props =>
        props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    }
  }
`

const Projects = () => {
  const state = useContext(GlobalStateContext)
  const [projects, setProjects] = useState([])

  const data = useStaticQuery(graphql`
    {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
      ) {
        edges {
          node {
            frontmatter {
              type
              title
              description
              github
              dribbble
              external
              tech
              cover {
                childImageSharp {
                  gatsbyImageData(
                    width: 700
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `)

  const developerProjects = data.projects.edges
    .filter(({ node }) => node)
    .filter(item => item.node.frontmatter.type === "developer")

  const designerProjects = data.projects.edges
    .filter(({ node }) => node)
    .filter(item => item.node.frontmatter.type === "designer")

  useEffect(() => {
    if (state.theme === "designer") {
      setProjects(designerProjects)
    } else {
      setProjects(developerProjects)
    }
  }, [state])

  const getLinks = (github, dribbble, external) => {
    let links = []

    if (github) {
      links.push(
        <a href={github}>
          <Icon name="github" />
        </a>
      )
    }
    if (dribbble) {
      links.push(
        <a href={dribbble}>
          <Icon name="dribbble" />
        </a>
      )
    }
    if (external) {
      links.push(
        <a href={external}>
          <Icon name="external" />
        </a>
      )
    }
    console.log(links)
    return links
  }

  const getProjects = () => {
    return projects.map(item => {
      const { title, description, github, dribbble, external, cover } =
        item.node.frontmatter
      const image = getImage(cover)

      return (
        <li className="project-card">
          <h4 className="title">{title}</h4>
          <div className="wrapper">
            <GatsbyImage image={image} alt={title} className="img" />
          </div>
          <p className="description">{description}</p>
          <div className="project-links">
            {getLinks(github, dribbble, external)}
          </div>
        </li>
      )
    })
  }

  return (
    <StyledProjectsSection colorTheme={state.theme}>
      <Fade bottom duration={600} distance="40px">
        <h2 className="section-title">Other Projects</h2>
      </Fade>

      <Fade bottom spy={state} duration={600} distance="90px" appear>
        <ul className="project-container">{getProjects()}</ul>
      </Fade>
    </StyledProjectsSection>
  )
}

export default Projects
