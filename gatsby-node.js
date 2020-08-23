/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve("./src/templates/product.js")
  const res = await graphql(`
    query {
      allContentfulBrands {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
  `)
  if (res.errors) throw res.errors
  res.data.allContentfulBrands.edges.forEach(({ node }) => {
    createPage({
      path: `/productos/${node.slug}`,
      component: productTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}
