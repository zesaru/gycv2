import React from 'react'
import {Link} from "gatsby"

const menu = () => {
    return (
        <div className="enlaces">
          <Link to={`/`}>Inicio</Link>
          <Link to={`/empresa`}>Empresa</Link>
          <Link to={`/contacto`}>Contacto</Link>
          <a href="#">Registrarse</a>
        </div>
    )
}

export default menu
