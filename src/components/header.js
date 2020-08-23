import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const [state, setState] = useState(true)

  function toggle() {
    state ? setState(false) : setState(true)
  }

  const data = useStaticQuery(graphql`
    query {
      allContentfulBrands(
        sort: { fields: title }
        filter: { node_locale: { eq: "en-US" } }
      ) {
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
  console.log(data)
  return <nav></nav>
}

export default Header
