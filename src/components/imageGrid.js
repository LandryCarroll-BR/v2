import { GatsbyImage } from "gatsby-plugin-image";
import Img from "gatsby-image";
import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalStateContext } from "../context/GlobalContextProvider";

const StyledImageGrid = styled.section`
  margin-top: 2em;
  max-width: 1500px;
  h2 {
    ${({ theme }) => theme.mixins.sectionTitle}

    &::after {
      background-color: ${(props) =>
        props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    }
  }
  .grid {
    ${({ theme }) => theme.mixins.resetList}
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(${(props) => props.minWidth}, 1fr)
    );
    grid-gap: 10px;
    margin: 0 auto;
  }
`;

const ImageGrid = ({ title, content, minWidth }) => {
  // const images = content.filter((item) => item.node);
  const state = useContext(GlobalStateContext);
  const images = content.edges.map((item) => item.node.childImageSharp);
  return (
    <StyledImageGrid
      colorTheme={state ? state.theme : "developer"}
      minWidth={minWidth}>
      <h2>{title}</h2>

      <ul className="grid">
        {images.map((item) => {
          if (item) {
            return (
              <li>
                <Img fluid={item.fluid} alt={title} />
              </li>
            );
          }
        })}
      </ul>
    </StyledImageGrid>
  );
};

export default ImageGrid;
