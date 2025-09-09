import React from 'react'
import styled from 'styled-components'

const StyledFooterSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 0 1em 0 !important;
  text-align: center;
  font-weight: 600;
  color: var(--slate);

  p {
    font-size: var(--fz-xs);
  }
`

const Footer = () => {
  return (
    <StyledFooterSection>
      <p>Made with ☕ by Landry Carroll ©{new Date().getFullYear()}</p>
    </StyledFooterSection>
  )
}

export default Footer
