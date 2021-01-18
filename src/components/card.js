import React from "react"
import "../components/card.css"
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import styled from "styled-components"


const Card = props => {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div>
      <Dialog  isOpen={showDialog} onDismiss={close}>
        <figure className="product-image">
          <img src={props.bigimage} alt={props.name} />
          <p>
           {props.description}
          </p>
        </figure>
        <button onClick={close}>Cerrar</button>
      </Dialog>
      <a onClick={open}  className="product">
        <figure className="product-image">
          <img src={props.image} alt={props.name} />
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
