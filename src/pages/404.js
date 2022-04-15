import React, { useContext } from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import styled from "styled-components";
import { graphql } from "gatsby";
import { GlobalStateContext } from "../context/GlobalContextProvider";

const Styled404 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  a {
    ${({ theme }) => theme.mixins.bigButton}
    color: ${(props) =>
      props.colorTheme === "designer" ? "var(--purple)" : "var(--cyan)"};
    margin-top: 1em;
  }
`;

const browser = typeof window !== "undefined" && window;

const NotFoundPage = ({ data, location }) => {
  const state = useContext(GlobalStateContext);
  const siteTitle = data.site.siteMetadata?.title || `Title`;

  return (
    browser && (
      <div>
        <Layout location={location} title={siteTitle}>
          <SEO title="404 Page not found" />
          <Styled404 colorTheme={state.theme}>
            <h1>404</h1>
            <p>Oh no! Looks like I haven't made that page yet!</p>
            <a href="/">Go Home</a>
          </Styled404>
        </Layout>
      </div>
    )
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
