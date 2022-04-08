import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import Icon from "./icons/icon";
import Menu from "./menu";
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 200;
  width: 100%;
  margin: 0 auto;
  background-color: var(--dark-blue);
  padding: 18px 24px;

  @media (min-width: 768px) {
    padding: 24px 36px;
  }

  @media (min-width: 1080px) {
    padding: 24px 50px;
  }
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  width: 100%;
  font-size: var(--fz-sm);

  svg {
    width: 24px;
    color: ${(props) =>
      props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    margin-right: 24px;
    transition: 200ms;
  }

  .toggle {
    color: ${(props) =>
      props.colorTheme === "designer" ? "var(--slate)" : "var(--cyan)"};
    cursor: pointer;
    transition: var(--transition);
  }

  .toggle:last-of-type {
    margin-right: auto;
    margin-left: 12px;
    font-weight: 400;
    color: ${(props) =>
      props.colorTheme === "designer" ? "var(--purple)" : "var(--slate)"};
  }

  .home,
  .projects,
  .contact {
    color: var(--slate);
    transition: var(--transition);
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  .home:hover,
  .projects:hover,
  .contact:hover {
    color: ${(props) =>
      props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
  }

  .projects,
  .contact,
  .resume {
    margin-left: 36px;
  }

  .resume {
    ${({ theme }) => theme.mixins.smallButton}
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

const Nav = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const state = useContext(GlobalStateContext);

  return (
    <StyledHeader>
      <StyledNav colorTheme={state ? state.theme : "developer"}>
        <Icon className="logo" name="Logo" />
        <span
          className="toggle"
          onClick={() => {
            dispatch({ type: "TOGGLE_THEME" });
          }}>
          Developer
        </span>
        <span
          className="toggle"
          onClick={() => {
            dispatch({ type: "TOGGLE_THEME" });
          }}>
          Designer
        </span>
        <Link className="home" to="/">
          Home
        </Link>
        <Link className="projects" to="#featured">
          Projects
        </Link>
        <Link className="contact" to="#contact">
          Contact
        </Link>
        <Link className="resume" to="/">
          Resume
        </Link>
        <Menu />
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
