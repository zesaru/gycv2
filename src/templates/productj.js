import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../../src/components/layoutj"
import Card from "../components/card"
import "./product.css"
import { renderRichText } from "gatsby-source-contentful/rich-text"

export const query = graphql`
  query($slug: String!) {
    allContentfulProducts(
      filter: { brand: { slug: { eq: $slug } } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          id
          jname
          brand {
            slug
          }
          jdescription {
            raw
          }
          productimage {
            gatsbyImageData(
              width: 550
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
          imagethum {
            gatsbyImageData(
              width: 120
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
          brand {
            slug
            title
            brandImage {
              gatsbyImageData(
                width: 1300
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`
const product = props => {
  const brandImage =
    props.data.allContentfulProducts.edges[0].node.brand.brandImage
  return (
    <Layout>
      <main className="contenedor pt">
        <GatsbyImage image={brandImage.gatsbyImageData} />
        <article>
          <section className="product-list">
            {props.data.allContentfulProducts.edges.map(edge => {
              return (
                <Card
                  key={edge.node.id}
                  image={edge.node.imagethum.gatsbyImageData}
                  name={edge.node.jname}
                  imagefluid={edge.node.productimage.gatsbyImageData}
                  description={renderRichText(edge.node.jdescription)}
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
