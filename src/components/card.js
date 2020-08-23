import React from "react"
import "../components/card.css"

const Card = props => {
  return (
    <div>
      <a href="" className="product">
        <figure className="product-image">
          <img src={props.image} alt="" />
        </figure>
        <span className="product-name">{props.name}</span>
        <span className="product-overlay">
          <p>
            <span className="product-likes"></span>
            <span className="product-comments"></span>
          </p>
        </span>
      </a>
    </div>
  )
}

export default Card
