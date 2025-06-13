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
  const productTemplateP = path.resolve("./src/templates/productp.js")
  const productTemplateJ = path.resolve("./src/templates/productj.js")


  const res = await graphql(`
    query {
      esp:allContentfulBrands {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
      port:allContentfulBrands {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
      jp:allContentfulBrands {
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
  res.data.esp.edges.forEach(({ node }) => {
    createPage({
      path: `/productos/${node.slug}`,
      component: productTemplate,
      context: {
        slug: node.slug,
      },
    })
  })

  res.data.port.edges.forEach(({ node }) => {
    createPage({
      path: `/pt/productos/${node.slug}`,
      component: productTemplateP,
      context: {
        slug: node.slug,
      },
    })
  })

  res.data.jp.edges.forEach(({ node }) => {
    createPage({
      path: `/jp/productos/${node.slug}`,
      component: productTemplateJ,
      context: {
        slug: node.slug,
      },
    })
  })
}
