import { useStaticQuery, graphql } from 'gatsby'

export const useHeroQuery = () => {
  const data = useStaticQuery(
    graphql`
    query HeroQuery {
  wpPage(databaseId: {eq: 47}) {
    id
    ACF_HomePage {
      heroImage {
        id
        localFile {
          childImageSharp {
            id
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
      heroText
    }
  }
}
`
  )
  return data
}