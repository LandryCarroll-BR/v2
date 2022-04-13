import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { GlobalStateContext } from "../../context/GlobalContextProvider";
import Icon from "../icons/icon";

const StyledProjectsSection = styled.section`
  .section-title {
    ${({ theme }) => theme.mixins.sectionTitle}

    &::after {
      background-color: ${(props) =>
        props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    }
  }

  .project-container {
    ${({ theme }) => theme.mixins.resetList}
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 16px;

    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 940px) {
      grid-template-columns: repeat(3, 1fr);
    }
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
    }

    .wrapper:hover {
      opacity: 1;
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
      color: ${(props) =>
        props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    }
  }
`;

const Projects = () => {
  const state = useContext(GlobalStateContext);
  const [projects, setProjects] = useState([]);

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
  `);

  const developerProjects = data.projects.edges
    .filter(({ node }) => node)
    .filter((item) => item.node.frontmatter.type === "developer");

  const designerProjects = data.projects.edges
    .filter(({ node }) => node)
    .filter((item) => item.node.frontmatter.type === "designer");

  useEffect(() => {
    if (state.theme === "designer") {
      setProjects(designerProjects);
    } else {
      setProjects(developerProjects);
    }
  }, [state]);

  const getLinks = (github, dribbble, external) => {
    let links = [];

    if (github) {
      links.push(
        <a href={github}>
          <Icon name="github" />
        </a>
      );
    }
    if (dribbble) {
      links.push(
        <a href={dribbble}>
          <Icon name="dribbble" />
        </a>
      );
    }
    if (external) {
      links.push(
        <a href={external}>
          <Icon name="external" />
        </a>
      );
    }
    return links;
  };

  const getProjects = () => {
    return projects.map((item) => {
      const { title, description, github, dribbble, external, cover } =
        item.node.frontmatter;
      const image = getImage(cover);

      return (
        <li className="project-card">
          <h4 className="title">{title}</h4>
          <a href={external} className="wrapper">
            <GatsbyImage image={image} alt={title} className="img" />
          </a>
          <p className="description">{description}</p>
          <div className="project-links">
            {getLinks(github, dribbble, external)}
          </div>
        </li>
      );
    });
  };

  return (
    <StyledProjectsSection colorTheme={state ? state.theme : "developer"}>
      <h2 className="section-title">Other Projects</h2>

      <ul className="project-container">{getProjects()}</ul>
    </StyledProjectsSection>
  );
};

export default Projects;
