import React from 'react'
import {Link} from "gatsby"

const menu = () => {
    return (
        <div className="enlaces">
          <Link to={`/`}>Inicio</Link>
          <Link to={`/empresa`}>Empresa</Link>
          <Link to={`/contacto`}>Contacto</Link>
          <Link to='/registro'>
            Registrarse
          </Link>        </div>
    )
}

export default menu
