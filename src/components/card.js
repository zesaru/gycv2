import React from "react"
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import styled from "styled-components"
import "../components/card.css"
import Img from "gatsby-image"

const Button = styled.button`
 @media screen and (max-width: 420px) {
  padding: 11px 20px;
  }  
`

const ButtonContainer = styled.div`
  text-align:center;
`

const Card = props => {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <>
      <Dialog  isOpen={showDialog} onDismiss={close}>
      <Img fluid={props.imagefluid} alt={props.name}/>
        <figure className="product-image">   
          <p>
           {props.description}
          </p>
        </figure>
        <ButtonContainer>
          <Button onClick={close}>Cerrar</Button>
        </ButtonContainer>
      </Dialog>
      <a href="#section" onClick={open} className="product">
        <figure className="product-image">
          <Img fluid={props.image} alt={props.name}/>
        </figure>
        <span className="product-name">{props.name}</span>
      </a>
    </>
  )
}

export default Card
