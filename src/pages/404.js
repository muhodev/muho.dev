import React from "react"
import { Link } from "gatsby"

import { Layout, Section, SEO } from "../components"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Sayfa bulunamadı" />
    <Section>
      <h1>Sayfa Bulunamadı</h1>
      <p>Böyle bir sayfa bulunamadı. <Link to="/">Ana sayfa</Link></p>
    </Section>
  </Layout>
)

export default NotFoundPage
