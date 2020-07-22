const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allStrapiProjects {
        nodes {
          Name
          id
        }
      }
    }
  `)

  if (resultado.errors) {
    reporter.panic("No se encontraron resultados", resultado.errors)
  }

  const projects = resultado.data.allStrapiProjects.nodes

  projects.forEach(project => {
    actions.createPage({
      path: urlSlug(project.Name),
      component: require.resolve("./src/components/project.js"),
      context: {
        id: project.id,
      },
    })
  })
}
