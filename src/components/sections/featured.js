import React, { useContext, useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Icon from "../icons/icon";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { GlobalStateContext } from "../../context/GlobalContextProvider";

const StyledProjects = styled.section`
  h2 {
    ${({ theme }) => theme.mixins.sectionTitle}

    &::after {
      background-color: ${(props) =>
        props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    }
  }

  ul {
    ${({ theme }) => theme.mixins.resetList}
  }
`;
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
    margin: 0 auto 40px auto;
  }

  &:last-child {
    margin: 0 auto;
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
    color: ${(props) =>
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
      color: ${(props) =>
        props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    }
  }

  .project-img {
    ${({ theme }) => theme.mixins.boxShadow}
    .wrapper {
      border-radius: var(--border-radius);
      overflow: hidden !important;
      opacity: 0.9;
      transition: opacity var(--transition);
    }

    img {
      transition: transform var(--transition);
    }

    .wrapper:hover {
      opacity: 1;
    }

    .wrapper:hover img {
      transform: scale(1.02);
    }

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
`;

const Featured = () => {
  const state = useContext(GlobalStateContext);
  const [featuredProjects, setFeaturedProjects] = useState([]);

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
  `);

  useEffect(() => {
    const developerProjects = data.featured.edges
      .filter(({ node }) => node)
      .filter((item) => item.node.frontmatter.type === "developer");

    const designerProjects = data.featured.edges
      .filter(({ node }) => node)
      .filter((item) => item.node.frontmatter.type === "designer");

    if (state.theme === "designer") {
      setFeaturedProjects(designerProjects);
    } else {
      setFeaturedProjects(developerProjects);
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

  const getFeatured = () => {
    return featuredProjects.map((item) => {
      const { title, description, tech, github, cover, external, dribbble } =
        item.node.frontmatter;
      const image = getImage(cover);

      return (
        <StyledProjectCard colorTheme={state.theme}>
          <div className="project-content">
            <span className="project-subtitle">Featured Project</span>
            <h4 className="project-title">{title}</h4>
            <p className="project-description">{description}</p>
            <ul className="project-tech">
              {tech.map((tech) => {
                return <li>{tech}</li>;
              })}
            </ul>
            <div className="project-links">
              {getLinks(github, dribbble, external)}
            </div>
          </div>
          <div className="project-img">
            <a className="wrapper" href={external}>
              <GatsbyImage image={image} alt={title} className="img" />
            </a>
          </div>
        </StyledProjectCard>
      );
    });
  };

  return (
    <StyledProjects
      colorTheme={state ? state.theme : "developer"}
      id="featured">
      <h2>Featured Projects</h2>
      <ul className="projects">{getFeatured()}</ul>
    </StyledProjects>
  );
};

export default Featured;
