import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Icon from "./icons/icon";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 200;
  width: 100%;
  padding: 24px 50px;
  margin: 0 auto;
  background-color: var(--dark-blue);
  display: none;

  @media (min-width: 768px) {
    display: block;
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
    color: var(--cyan);
    margin-right: 24px;
  }

  .toggle:last-of-type {
    margin-right: auto;
    margin-left: 12px;
    font-weight: 400;
  }

  .home,
  .projects,
  .contact {
    color: var(--slate);
    transition: var(--transition);
  }

  .home:hover,
  .projects:hover,
  .contact:hover {
    color: var(--cyan);
  }

  .projects,
  .contact,
  .resume {
    margin-left: 36px;
  }

  .resume {
    ${({ theme }) => theme.mixins.smallButton}
  }
`;

const Nav = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <Icon className="logo" name="Logo" />
        <span className="toggle">Developer</span>
        <span className="toggle">Designer</span>
        <Link className="home" to="/">
          Home
        </Link>
        <Link className="projects" to="/projects">
          Projects
        </Link>
        <Link className="contact" to="/contact">
          Contact
        </Link>
        <Link className="resume" to="/">
          Resume
        </Link>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
