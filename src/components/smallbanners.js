import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import "./smallbanners.css"

export const Smallbanners = () => {
  const data = useStaticQuery(graphql`
    query smallBanners {
      allContentfulSmallbanners(sort: { name: ASC }) {
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
            {url === "ganadores2025" || url === "sevebuenazo-mayo-2025" ? (
              <Link to={`${url}`}>
                <GatsbyImage image={node.image.gatsbyImageData} alt={node.name}/>
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