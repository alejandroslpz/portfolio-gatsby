import { graphql, useStaticQuery } from "gatsby"

const usePortfolio = () => {
  const portfolio = useStaticQuery(graphql`
    query {
      allStrapiProjects {
        nodes {
          Name
          id
          Description
          Type
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

  console.log(portfolio)

  return portfolio.allStrapiProjects.nodes.map(project => ({
    id: project.id,
    name: project.Name,
    image: project.Image,
    description: project.Description,
    type: project.Type,
  }))
}

export default usePortfolio
