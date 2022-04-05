import React from "react"
import IconGitHub from "../icons/github"
import IconExternal from "../icons/external"
import IconLogo from "../icons/logo"
// import { propTypes } from 'gatsby-plugin-image/dist/src/components/gatsby-image.server';

// eslint-disable-next-line react/prop-types
const Icon = ({ name }) => {
  switch (name) {
    case "github":
      return <IconGitHub />
    case "Logo":
      return <IconLogo />
    default:
      return <IconExternal />
  }
}

// Icon.propTypes = {
//   name: propTypes.string,
// };

export default Icon
