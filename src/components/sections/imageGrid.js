import { GatsbyImage } from "gatsby-plugin-image";
import Img from "gatsby-image";
import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalStateContext } from "../../context/GlobalContextProvider";

const StyledImageGrid = styled.section`
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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 10px;
    margin: 0 auto;
  }
`;

const ImageGrid = ({ title, content }) => {
  // const images = content.filter((item) => item.node);
  const state = useContext(GlobalStateContext);
  const images = content.edges.map((item) => item.node.childImageSharp);
  return (
    <StyledImageGrid colorTheme={state.theme}>
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
