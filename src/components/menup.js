import React  from 'react'
import {Link} from "gatsby"

const menu = () => {
    return (
        <div className="enlaces">
            <Link to={`/pt/`}>INÍCIO</Link>
            <Link to={`/pt/empresa`}>SOBRE NÓS</Link>
            <Link to={`/pt/contacto`}>CONTATO</Link>
            <Link to='/pt/registro'>
              CADASTRO
            </Link>  
       </div>
    )
     
}

export default menu
