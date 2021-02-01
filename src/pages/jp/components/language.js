import React from 'react'
import {Link} from "gatsby"

const language = () => {
    return (
        <div className="enlaces">
          <Link to={`/`}>ESP</Link>
          <Link to={`/jp/`}>JAP</Link>
          <Link to={`/pt`}>PORT</Link>
        </div>
    )
}

export default language