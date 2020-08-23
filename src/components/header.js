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

        <div className="contain-search">
          <input type="search" name="" id="input-search" />
          <button type="submit" className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div>

        <div className="enlaces">
          <Link to={`/`}>Inicio</Link>
          <Link to={`/empresa`}>Empresa</Link>
          <Link to={`/contacto`}>Contacto</Link>
          <a href="#">Registrarse</a>
        </div>
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
                  {edge.node.title}
                  <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              )
            })}
          </div>

          <div className="contenedor-subcategorias">
            <div className="subcategoria " data-categoria="provensal">
              <div className="enlaces-subcategoria">
                <button className="btn-regresar">
                  <i className="fas fa-arrow-left"></i>Regresar
                </button>
                <h3 className="subtitulo">Provensal</h3>
                <a href="#">Pastas</a>
                <a href="#">Aceitunas</a>
              </div>

              <div className="banner-subcategoria">
                <a href="#">
                  <img src="./img/provenzal-1.jpg" alt="" />
                </a>
              </div>

              <div className="galeria-subcategoria">
                <a href="#">
                  <img src="./img/provenzal-1.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="./img/provenzal-2.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="./img/provenzal-3.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="./img/provenzal-4.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
