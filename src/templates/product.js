import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    allContentfulProducts(filter: { brand: { slug: { eq: $slug } } }) {
      edges {
        node {
          id
          name
          brand {
            slug
          }
          description {
            json
          }
          productimage {
            file {
              url
            }
          }
          imagethum {
            file {
              url
            }
          }
        }
      }
    }
  }
`

const product = props => {
  return (
    <Layout>
      <main className="contenedor">
        <article>
          <section className="product-list">
            {props.data.allContentfulProducts.edges.map(edge => {
              return (
                <Card
                  key={edge.node.id}
                  image={edge.node.imagethum.file.url + "?fm=webp"}
                  name={edge.node.name}
                  description={documentToReactComponents(
                    edge.node.description.json
                  )}
                ></Card>
              )
            })}
          </section>
        </article>
      </main>
    </Layout>
  )
}

export default product
