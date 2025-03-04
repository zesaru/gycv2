import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Card from "../components/card"
import "./product.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";


const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>, // Renderiza negritas
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4">{children}</p>, // Espacios entre párrafos
    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc ml-6">{children}</ul>, // Listas con viñetas
    [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal ml-6">{children}</ol>, 
    [BLOCKS.QUOTE]: (node, children) => <blockquote className="border-l-4 pl-4 italic">{children}</blockquote> // Citas estilizadas
  }
};

const ProductDescription = ({ description }) => {
  if (!description || !description.raw) {
    return <p>No hay descripción disponible.</p>; 
  }
  return <div>{documentToReactComponents(JSON.parse(description.raw), richTextOptions)}</div>;
};

export const query = graphql`
  query ($slug: String!) {
    allContentfulProducts(
      filter: { brand: { slug: { eq: $slug } } }
      sort: { fields: name }
    ) {
      edges {
        node {
          id
          name
          brand {
            slug
          }
          description {
            raw
          }
          productimage {
            gatsbyImageData(
              width: 550
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 80
            )
          }
          imagethum {
            gatsbyImageData(
              width: 120
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 100
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
                quality: 100
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
                  name={edge.node.name}
                  imagefluid={edge.node.productimage.gatsbyImageData}
                  description={<ProductDescription description={edge.node.description} />}
                />
              )
            })}
          </section>
        </article>
      </main>
    </Layout>
  )
}

export default product
