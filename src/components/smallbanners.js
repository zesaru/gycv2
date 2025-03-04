import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./smallbanners.css"

export const Smallbanners = () => {
  const data = useStaticQuery(graphql`
    query smallBanners {
      allContentfulSmallbanners(sort: { fields: name }) {
        nodes {
          image {
            id
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 100
            )
          }
          name
          url
        }
        totalCount
      }
    }
  `)
  return (
    <div className="secundary-menu-container">
      {data.allContentfulSmallbanners.nodes.map(node => {
        const url = node.url || '';
        return (
          <div className="secundary-menu-container-item" key={node.id}>
            {node.url === "ganadores-sevebuenazo2022" ||
            node.url === "se_bebe_buenazo_2022" ? (
              <Link to={`${node.url}`}>
                <GatsbyImage image={node.image.gatsbyImageData} />
              </Link>
            ) : (
              <Link to={url ? `productos/${url}/` : `/`}>
                <GatsbyImage
                  image={node.image.gatsbyImageData}
                  alt={node.name}
                />
              </Link>
            )}
          </div>
        )
      })}
    </div>
  )
}
