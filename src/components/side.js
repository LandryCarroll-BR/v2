// import { propTypes } from 'gatsby-plugin-image/dist/src/components/gatsby-image.server';
import React from "react"
import styled from "styled-components"

const StyledSideElement = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: ${props => (props.orientation === "left" ? "40px" : "auto")};
  right: ${props => (props.orientation === "left" ? "auto" : "40px")};
  z-index: 100;
  color: var(--slate);

  @media (max-width: 1080px) {
    left: ${props => (props.orientation === "left" ? "20px" : "auto")};
    right: ${props => (props.orientation === "left" ? "auto" : "20px")};
  }

  @media (max-width: 768px) {
    display: none;
  }
`

// eslint-disable-next-line react/prop-types
const Side = ({ orientation, children }) => {
  return (
    <StyledSideElement orientation={orientation}>{children}</StyledSideElement>
  )
}

// Side.propTypes = {
//   orientation: propTypes.string,
// };

export default Side
