import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables};

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    background: var(--dark-blue);
  }

  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-blue) var(--blue);
  }
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: var(--dark-blue);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--blue);
    border: 3px solid var(--dark-blue);
    border-radius: 10px;
  }

  body {
  margin: 0;
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  background-color: var(--navy);
  color: var(--slate);
  font-family: var(--font-sans);
  font-size: var(--fz-lg);
  line-height: 1.3;
  padding: 0 24px;

  @media (min-width: 480px) {
    font-size: var(--fz-xl);
  }

  @media (min-width: 768px) {
    padding: 0 100px;
  }

  @media (min-width: 1080px) {
    padding: 0 120px;
  }

  @media (min-width: 1200px) {
    padding: 0 150px;
  }

  &.hidden {
    overflow: hidden;
  }

  &.blur {
    overflow: hidden;

    header {
      background-color: transparent;
    }

    #content > * {
      filter: blur(5px) brightness(0.7);
      transition: var(--transition);
      pointer-events: none;
      user-select: none;
    }
  }
}

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  img,
  svg,
  .gatsby-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--white);
    line-height: 1.3;
  }

  p {
    line-height: 1.6;
    font-size: var(--fz-md);
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    font-weight: 400;
  }

`;

export default GlobalStyle;
