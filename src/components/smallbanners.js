import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import "./smallbanners.scss"

export const Smallbanners = () => {
    const data = useStaticQuery(graphql`
    query smallBanners {
      allContentfulSmallbanners(sort: {fields: name}) {
        nodes {
          image {
            id
            fluid(quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          name
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
                  <Image fluid={node.image.fluid} alt={node.name} />
                </div>
          )
        })}           
        </div>
    )
}




