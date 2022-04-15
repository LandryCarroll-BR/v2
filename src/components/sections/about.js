import React, { useEffect, useState, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { GlobalStateContext } from "../../context/GlobalContextProvider";

const StyledAboutSection = styled.section`
  h2 {
    ${({ theme }) => theme.mixins.sectionTitle}

    &::after {
      background-color: ${(props) =>
        props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    }
  }

  p {
    max-width: 600px;
  }

  p:first-of-type {
    margin-top: -10px;
  }

  ul {
    ${({ theme }) => theme.mixins.resetList}
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto 0 20px;
    grid-gap: 12px;
    column-gap: 24px;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 1200px) {
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: row;
    }
  }

  .tech-container {
    ${({ theme }) => theme.mixins.boxShadow}
    background-color: var(--blue);
    border-radius: var(--border-radius);
    padding: 1.5em 1.6em;
    width: 100%;
    max-width: 400px;

    p {
      margin-bottom: 0px;
    }

    & span {
      color: var(--slate);
      max-width: 50px;

      & p {
        margin-bottom: 1em;
      }
    }

    & li {
      font-weight: bold;
      position: relative;
    }

    & li::before {
      content: "»";
      color: ${(props) =>
        props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
      position: absolute;
      left: -18px;
      top: -12px;
      opacity: 0.7;
    }
  }
`;

const About = () => {
  const state = useContext(GlobalStateContext);
  const [about, setabout] = useState([]);

  const data = useStaticQuery(graphql`
    {
      about: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/about/" } }
      ) {
        edges {
          node {
            frontmatter {
              type
              one
              two
              three
              tech
            }
          }
        }
      }
    }
  `);

  const developerAbout = data.about.edges
    .filter(({ node }) => node)
    .filter((item) => item.node.frontmatter.type === "developer");

  const designerAbout = data.about.edges
    .filter(({ node }) => node)
    .filter((item) => item.node.frontmatter.type === "designer");

  useEffect(() => {
    if (state.theme === "designer") {
      setabout(designerAbout[0].node.frontmatter);
    } else {
      setabout(developerAbout[0].node.frontmatter);
    }
  }, [state]);

  const getTech = () => {
    const list = about.tech;
    if (!list) {
      return;
    }
    return list.map((item) => {
      return (
        <li>
          <p>{item}</p>
        </li>
      );
    });
  };

  console.log(about.tech);
  return (
    <StyledAboutSection colorTheme={state ? state.theme : "developer"}>
      <h2>About Me</h2>
      <div className="wrapper">
        <div className="bio-container">
          <p>{about.one}</p>
          <p>{about.two}</p>
          <p>{about.three}</p>
        </div>

        <div className="tech-container">
          <span>
            <p>Technologies I use:</p>
          </span>
          <ul>{getTech()}</ul>
        </div>
      </div>
    </StyledAboutSection>
  );
};

export default About;
