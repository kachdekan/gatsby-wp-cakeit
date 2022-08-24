import * as React from "react"
import Layout from '../components/Layout/Layout'
import Hero from "../components/Hero/Hero"
import Seo from "../components/SEO/SEO"
import CTAArea from "../components/CTAArea/CTAArea"
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <CTAArea />
    <LatestBlogPost />
  </Layout>
)


export default IndexPage
