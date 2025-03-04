const path = require("path")

// Función para crear páginas con soporte mejorado para Gatsby 4
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Definir rutas de plantillas de manera más flexible
  const templates = {
    esp: path.resolve("./src/templates/product.js"),
    port: path.resolve("./src/templates/productp.js"),
    jp: path.resolve("./src/templates/productj.js")
  }

  // Consulta GraphQL con mejores prácticas de Gatsby 4
  const result = await graphql(`
    query {
      esp: allContentfulBrands(filter: { language: { eq: "es" } }) {
        nodes {
          id
          title
          slug
          language
        }
      }
      port: allContentfulBrands(filter: { language: { eq: "pt" } }) {
        nodes {
          id
          title
          slug
          language
        }
      }
      jp: allContentfulBrands(filter: { language: { eq: "ja" } }) {
        nodes {
          id
          title
          slug
          language
        }
      }
    }
  `)

  // Manejo de errores mejorado
  if (result.errors) {
    reporter.panicOnBuild('Error al cargar marcas', result.errors)
    return
  }

  // Función de creación de páginas reutilizable
  const createProductPages = (brands, language, template) => {
    brands.forEach((brand) => {
      // Ruta base con prefijo de idioma
      const basePath = language === 'es' ? '/productos' : `/${language}/productos`
      
      createPage({
        path: `${basePath}/${brand.slug}`,
        component: template,
        context: {
          id: brand.id,
          slug: brand.slug,
          language: language
        },
        // Opciones de generación de páginas en Gatsby 4
        defer: true // Aplaza la generación de páginas para mejorar el rendimiento de la compilación
      })
    })
  }

  // Crear páginas para cada idioma
  createProductPages(result.data.esp.nodes, 'es', templates.esp)
  createProductPages(result.data.port.nodes, 'pt', templates.port)
  createProductPages(result.data.jp.nodes, 'jp', templates.jp)
}

// Opcional: Configuración de los tipos de nodos para tipos personalizados
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  
  createTypes(`
    type ContentfulBrands implements Node {
      id: ID!
      title: String!
      slug: String!
      language: String!
    }
  `)
}

// Opcional: Hook para transformar los datos de los nodos antes de la creación de páginas
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Ejemplo de cómo añadir campos personalizados
  if (node.internal.type === 'ContentfulBrands') {
    createNodeField({
      node,
      name: 'fullSlug',
      value: `/productos/${node.slug}`
    })
  }
}