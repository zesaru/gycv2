import React from 'react'
import {Link} from "gatsby"

const menu = () => {
    return (
        <div className="enlaces">
          <Link to={`/`}>ホーム</Link>
          <Link to={`/empresa`}>会社概要</Link>
          <Link to={`/contacto`}>お問い合わせ</Link>
        </div>
    )
}

export default menu
