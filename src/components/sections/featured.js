import React, { useContext, useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Icon from "../icons/icon"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"
import { GlobalStateContext } from "../../context/GlobalContextProvider"

const StyledProjects = styled.section`
  h2 {
    ${({ theme }) => theme.mixins.sectionTitle}

    &::after {
      background-color: ${props =>
        props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    }
  }

  ul {
    ${({ theme }) => theme.mixins.resetList}
  }
`
const StyledProjectCard = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  align-items: center;
  width: 100%;
  margin: 0 auto 120px auto;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
  }

  &:nth-of-type(even) {
    .project-content {
      grid-column: 7/13;
      text-align: right;

      @media (max-width: 940px) {
        grid-column: 6 / 13;
      }
      @media (max-width: 830px) {
        grid-column: 5 / 13;
      }
      @media (max-width: 600px) {
        text-align: left;
      }
    }

    .project-tech {
      justify-content: flex-end;

      & li:last-of-type {
        margin: 0;
      }

      @media (max-width: 600px) {
        justify-content: flex-start;
      }
    }

    .project-links {
      justify-content: flex-end;

      *:last-child {
        margin: 0;
      }

      @media (max-width: 600px) {
        justify-content: flex-start;
      }
    }

    .project-img {
      grid-column: 1 / 8;

      @media (max-width: 940px) {
        grid-column: 1 / 9;
      }
      @media (max-width: 830px) {
        grid-column: 1 / 10;
      }
    }
  }

  .project-content {
    position: relative;
    z-index: 10;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 940px) {
      grid-column: 1 / 8;
    }
    @media (max-width: 830px) {
      grid-column: 1 / 9;
    }
  }

  .project-subtitle {
    color: ${props =>
      props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    font-size: var(--fz-sm);
    transition: var(--transition);
  }

  .project-title {
    margin-top: 0.7em;
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow}
    margin-top: 1.25em;
    background-color: var(--blue);
    padding: 1em 1.3em;
    border-radius: var(--border-radius);
  }

  .project-tech {
    display: flex;
    justify-content: flex-start;
    font-size: var(--fz-sm);
    margin-top: 1.55em;

    * {
      margin-right: 1.5em;
    }
  }

  .project-links {
    display: flex;
    justify-content: flex-start;
    margin: 1em 0;

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

  .project-img {
    ${({ theme }) => theme.mixins.overlay};
    /* .wrapper::after {
      background: ${props =>
      props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    } */
    position: relative;
    height: 100%;
    grid-column: 6 / 13;
    grid-row: -1 / 1;

    @media (max-width: 940px) {
      grid-column: 5 / 13;
    }

    @media (max-width: 830px) {
      grid-column: 4 / 13;
    }
  }
`

const Featured = () => {
  const state = useContext(GlobalStateContext)
  const [featuredProjects, setFeaturedProjects] = useState([])

  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/featured/" } }
      ) {
        edges {
          node {
            frontmatter {
              type
              title
              description
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
              github
              external
            }
          }
        }
      }
    }
  `)

  const developerProjects = data.featured.edges
    .filter(({ node }) => node)
    .filter(item => item.node.frontmatter.type === "developer")

  const designerProjects = data.featured.edges
    .filter(({ node }) => node)
    .filter(item => item.node.frontmatter.type === "designer")

  useEffect(() => {
    if (state.theme === "designer") {
      setFeaturedProjects(designerProjects)
    } else {
      setFeaturedProjects(developerProjects)
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

  const getFeatured = () => {
    return featuredProjects.map(item => {
      const { title, description, tech, github, cover, external, dribbble } =
        item.node.frontmatter
      const image = getImage(cover)

      return (
        <StyledProjectCard colorTheme={state.theme}>
          <Fade
            bottom
            spy={state}
            duration={600}
            distance="40px"
            cascade
            appear
          >
            <div className="project-content">
              <span className="project-subtitle">Featured Project</span>
              <h4 className="project-title">{title}</h4>
              <p className="project-description">{description}</p>
              <ul className="project-tech">
                {tech.map(tech => {
                  return <li>{tech}</li>
                })}
              </ul>
              <div className="project-links">
                {getLinks(github, dribbble, external)}
              </div>
            </div>
            <div className="project-img">
              <div className="wrapper">
                <GatsbyImage image={image} alt={title} className="img" />
              </div>
            </div>
          </Fade>
        </StyledProjectCard>
      )
    })
  }

  return (
    <StyledProjects colorTheme={state.theme} id="featured">
      <Fade bottom duration={800} distance="50px">
        <h2>Featured Projects</h2>
      </Fade>
      <ul className="projects">{getFeatured()}</ul>
    </StyledProjects>
  )
}

export default Featured