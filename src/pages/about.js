import React from "react"
import { Layout } from "layout"
import { SEO } from "components"
import styled from "@emotion/styled"

const Title = styled.h2`
  padding-left: 2rem;
  font-size: 36px;
  line-height: 40px;
  margin: 1rem 0 0 0;
  font-weight: 400;
  letter-spacing: 0.2em;
`

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Title>About Us</Title>
    </Layout>
  )
}

export default About
