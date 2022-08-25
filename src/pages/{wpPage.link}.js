import React from 'react'
import { graphql } from "gatsby";
import Layout from '../components/Layout/Layout';
import PageHero from '../components/PageHero/PageHero';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`

const PageContent = styled.article`
  margin: 20px 0 0 0;
`

const PageTemplate = ({ data }) => {
  return (
    <Layout>
      {data.wpPage.featuredImage ? (
        <PageHero img={
          data.wpPage.featuredImage.node.localFile.childImageSharp
            .gatsbyImageData
        } />
      ) : null}
      <Wrapper>
        <p>Sidebar</p>
        <p>Content</p>
      </Wrapper>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
query($id: String!) {
  wpPage(id: {eq: $id }) {
    id
    title
    content
    status
    featuredImage {
      node {
        id
        localFile {
          childImageSharp {
            gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
          }
        }
      }
    }
    wpChildren {
      nodes {
        ... on WpPage {
          id
          link
          title
        }
      }
    }
    wpParent {
      node {
        ... on WpPage {
          id
          link
          title
          wpChildren {
            nodes {
              ... on WpPage {
                id
                link
                title
              }
            }
          }
        }
      }
    }
  }
}
`