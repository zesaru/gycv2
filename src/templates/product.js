import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"
import Img from "gatsby-image"
import "./product.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    allContentfulProducts(
      filter: { brand: { slug: { eq: $slug } } }
      sort: {fields: name}) {
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
            fluid(maxWidth: 550, quality: 80) {
              ...GatsbyContentfulFluid
            }  
          }
          imagethum {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyContentfulFluid
            } 
          }
          brand {
            slug
            title
            brandImage {
              fluid(maxWidth: 1300) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`
const product = props => {
  const brandImage =
    props.data.allContentfulProducts.edges[0].node.brand.brandImage.fluid
  return (
    <Layout>
      <main className="contenedor pt">
        <Img fluid={brandImage} />
        <article>
          <section className="product-list">
            {props.data.allContentfulProducts.edges.map(edge => {
              return (
                <Card
                  key={edge.node.id}
                  image={edge.node.imagethum.fluid}
                  name={edge.node.name}
                  imagefluid={edge.node.productimage.fluid}
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
