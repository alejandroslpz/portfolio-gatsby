import { graphql, useStaticQuery } from "gatsby"

const usePortfolio = () => {
  const portfolio = useStaticQuery(graphql`
    query {
      allStrapiProjects {
        nodes {
          Name
          id
          Description
          Categories {
            categories {
              Name
            }
          }
          Image {
            sharp: childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return portfolio.allStrapiProjects.nodes.map(project => ({
    id: project.id,
    name: project.Name,
    image: project.Image,
    description: project.Description,
  }))
}

export default usePortfolio
