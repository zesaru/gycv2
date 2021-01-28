import React, { useState } from "react"
import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBars,
  faTimes,
  faCaretDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons"
import { Link, graphql, useStaticQuery } from "gatsby"

import Language from "./language"
import Flagmenu from "./flagmenu"
import Menu from "./menu"


import styled from "styled-components"
const Subtitle = styled.span`
  font-size:12px;
  margin:0;
  padding:0;
  color: red;
  border: 1px solid red;

`
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
            descrption
          }
        }
      }
    }
  `)
  return (
    <nav className="menu" id="menu">
      <div className="contenedor contenedor-botones-menu">
        <button
          onClick={toggle}
          id="btn-menu-barras"
          className="btn-menu-barras"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button id="btn-menu-cerrar" className="btn-menu-cerrar">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        < Flagmenu />
      </div>
 
      <div className="contenedor contenedor-enlaces-nav">
        <div
          onClick={toggle}
          className="btn-departamentos"
          id="btn-departamentos"
        >
          <p>
            Todos los <span>Productos</span>
          </p>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>

        <Language />
        <Menu />

      </div>

      <div className="contenedor contenedor-grid">
        <div className={state ? "grid" : "grid activo"} id="grid">
          <div className="categorias">
            <button onClick={toggle} className="btn-regresar">
              <i className="fas fa-arrow-left"></i> Regresar
            </button>
            <h3 className="subtitulo">Categorias</h3>
            {data.allContentfulBrands.edges.map(edge => {
              return (
                <Link
                  key={edge.node.id}
                  to={`/productos/${edge.node.slug}`}
                  data-categoria={edge.node.slug}
                >
                  <span>{edge.node.title} <Subtitle>{edge.node.descrption}</Subtitle></span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              )
            })}
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Header
