import React from 'react'
import {Link} from "gatsby"

const menu = () => {
    return (
        <div className="enlaces">
          { window.location.pathname.includes("/jp") ?           
          <>
          <Link to={`/`}>ホーム</Link>
          <Link to={`/empresa`}>会社概要</Link>
          <Link to={`/contacto`}>お問い合わせ</Link>
          </> :
          window.location.pathname.includes("/pt") ?           
          <> 
          <Link to={`/`}>Inicio</Link>
          <Link to={`/empresa`}>Empresa</Link>
          <Link to={`/contacto`}>Contacto</Link>
          <Link to='/registro'>
            Registrarse
          </Link>  
          </>:
          <> 
            <Link to={`/`}>Inicio</Link>
            <Link to={`/empresa`}>Empresa</Link>
            <Link to={`/contacto`}>Contacto</Link>
            <Link to='/registro'>
              Registrarse
            </Link>  
          </>       
        }
       </div>
    )
}

export default menu
