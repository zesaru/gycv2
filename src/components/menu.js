import React from 'react'
import {Link} from "gatsby"

const menu = () => {
    return (
        <div className="enlaces">
          { window.location.pathname.includes("/jp") ?           
          <>
          <Link to={`/jp`}>ホーム</Link>
          <Link to={`/jp/empresa`}>会社概要</Link>
          <Link to={`/jp/contacto`}>お問い合わせ</Link>
          <Link to={`/jp/registro`}>登録</Link>
         
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
