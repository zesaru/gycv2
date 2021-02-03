import React, { useState, useEffect } from 'react'
import {Link} from "gatsby"
const menuj = () => {
    return (
        <div className="enlaces">
          <Link to={`/jp`}>ホーム</Link>
          <Link to={`/jp/empresa`}>会社概要</Link>
          <Link to={`/jp/contacto`}>お問い合わせ</Link>
          <Link to={`/jp/registro`}>登録</Link>
       </div>
    )
     
}

export default menuj