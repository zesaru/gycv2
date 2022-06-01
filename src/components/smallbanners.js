import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import "./smallbanners.css"

export const Smallbanners = () => {
  const data = useStaticQuery(graphql`
    query smallBanners {
      allContentfulSmallbanners(sort: { fields: name }) {
        nodes {
          image {
            id
            fluid(quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
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
        return (
          <div className="secundary-menu-container-item" key={node.id}>
            {node.url === "ganadores-sevebuenazo2022" ||
            node.url === "se_bebe_buenazo_2022" ? (
              <Link to={`${node.url}`}>
                <Image fluid={node.image.fluid} alt={node.name} />
              </Link>
            ) : (
              <Link to={`/productos/${node.url}`}>
                <Image fluid={node.image.fluid} alt={node.name} />
              </Link>
            )}
          </div>
        )
      })}
    </div>
  )
}
