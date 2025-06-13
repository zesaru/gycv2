import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Dialog } from "@reach/dialog"
import "@reach/dialog/styles.css"
import styled from "styled-components"
import "../components/card.css"

const Button = styled.button`
  @media screen and (max-width: 420px) {
    padding: 11px 20px;
  }
`

const ButtonContainer = styled.div`
  text-align: center;
`

const Description = styled.p`
  text-align: left;
`

const Card = props => {
  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <GatsbyImage image={props.imagefluid} alt={props.name} />
        <figure className="product-image">
          <Description>{props.description}</Description>
        </figure>
        <ButtonContainer>
          <Button onClick={close}>Cerrar</Button>
        </ButtonContainer>
      </Dialog>
      <a href="#section" onClick={open} className="product">
        <figure className="product-image">
          <GatsbyImage image={props.image} alt={props.name} />
        </figure>
        <span className="product-name">{props.name}</span>
      </a>
    </>
  )
}

export default Card
