import React from "react"
import "../components/card.css"
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import styled from "styled-components"
import Img from "gatsby-image"


const Card = props => {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div>
      <Dialog  isOpen={showDialog} onDismiss={close}>
      <Img fluid={props.imagefluid} alt={props.name}/>
        <figure className="product-image">
        
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
      </a>
    </div>
  )
}

export default Card
