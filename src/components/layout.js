import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/globalStyles"
import theme from "../styles/theme"
import Nav from "./nav"
import Copyright from "./copyright"
import Email from "./email"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <header className="global-header">
          <Nav />
        </header>
        <main>
          <Copyright />
          <Email />
          {children}
        </main>
        <footer></footer>
      </ThemeProvider>
    </div>
  )
}

export default Layout
