/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import { Header } from "layout"
import "../styles/layout.css"

const ContentWrapper = styled.div`
  margin: 0 30px;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;

  @media (max-width: 650px) {
    padding: 0 0 1.45rem;
    margin: 0;

    max-width: 100%;
    width: 100%;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ maxWidth: "1400px" }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ContentWrapper id="childWrapper">
        <main>{children}</main>
      </ContentWrapper>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
