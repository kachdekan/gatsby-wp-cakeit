import * as React from "react"

import Layout from "../components/Layout/Layout"
import Seo from "../components/SEO/SEO"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not Found" />
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
