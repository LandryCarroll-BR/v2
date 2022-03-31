import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const StyledProjectsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`
const StyledProjectsContainer = styled.ul`
  ${({ theme }) => theme.mixins.resetList}
`

const StyledProjectCard = styled.li`
  padding: 1em 1.25em;
`

const Projects = () => {
  return (
    <StyledProjectsSection>
      <StyledProjectsContainer>
        <StyledProjectCard></StyledProjectCard>
      </StyledProjectsContainer>
    </StyledProjectsSection>
  )
}

export default Projects
