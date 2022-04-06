import { css } from "styled-components"

const button = css`
  color: var(--cyan);
  background-color: transparent;
  border: 1px solid var(--cyan);
  border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  font-family: var(--font-mono);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  padding: 1.25rem 1.75rem;

  &:hover,
  &:focus,
  &:active {
    background-color: var(--cyan-tint);
    outline: none;
  }
  &:after {
    display: none !important;
  }
`

const mixins = {
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexBetween: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--blue-shadow);
    transition: var(--transition);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--blue-shadow);
    }
  `,
  sectionTitle: css`
    margin-bottom: 2em;
    position: relative;
    width: auto;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      width: 80px;
      max-width: 140px;
      margin-left: 30px;
      height: 1px;
      transition: var(--transition);

      @media (max-width: 480px) {
        display: none;
      }
    }
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:active,
    &:focus {
      color: var(--green);
      outline: 0;
    }
  `,

  inlineLink: css`
    transition: var(--transition);
    color: var(--cyan);
    &:hover,
    &:focus,
    &:active {
      color: var(--cyan);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        transition: var(--transition);
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.1em;
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  overlay: css`
    .wrapper {
      ${({ theme }) => theme.mixins.boxShadow};
      position: relative;
      overflow: hidden;
      border-radius: var(--border-radius);
      cursor: pointer;
      transition: 200ms;
    }

    .wrapper:hover {
      filter: brightness(1.3);
    }

    .wrapper::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      background: var(--gradient);
      mix-blend-mode: multiply;
      overflow: hidden;
      transition: var(--transition);
    }

    .img {
      position: relative;
      filter: grayscale(100%);
      z-index: 1;
      border: 1px solid #fff;
      border-radius: var(--border-radius);
      transition: 200ms;
    }
  `,

  button,

  smallButton: css`
    color: var(--cyan);
    background-color: transparent;
    border: 1px solid var(--cyan);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--cyan-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
    color: ${props =>
      props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    border-color: ${props =>
      props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    &:hover {
      background-color: ${props =>
        props.colorTheme === "designer"
          ? "var(--purple-tint)"
          : "var(--cyan-tint)"};
    }
  `,

  bigButton: css`
    color: var(--cyan);
    background-color: transparent;
    border: 1px solid var(--cyan);
    border-radius: var(--border-radius);
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--cyan-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
    color: ${props =>
      props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    border-color: ${props =>
      props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    &:hover {
      background-color: ${props =>
        props.colorTheme === "designer"
          ? "var(--purple-tint)"
          : "var(--cyan-tint)"};
    }
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
}

export default mixins
