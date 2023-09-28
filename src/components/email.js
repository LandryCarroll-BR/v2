import React, { useContext } from 'react'
import styled from 'styled-components'
import Side from './side'
import { GlobalStateContext } from '../context/GlobalContextProvider'

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 100;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    color: var(--slate);
    transition: var(--transition);

    &:hover,
    &:focus {
      transform: translateY(-3px);
      color: ${(props) =>
        props.colorTheme === 'designer' ? 'var(--purple)' : 'var(--cyan)'};
    }
  }
`

const Email = () => {
  const state = useContext(GlobalStateContext)

  return (
    <Side orientation="right">
      <StyledLinkWrapper colorTheme={state ? state.theme : 'developer'}>
        <a href={`mailto:carroll.landry@gmail.com`}>carroll.landry@gmail.com</a>
      </StyledLinkWrapper>
    </Side>
  )
}

export default Email
