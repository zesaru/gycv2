import React from "react"
import styled from "styled-components"

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  width: 180px;
  height: 180px;
  margin-bottom: 10px;
`
const Img = styled.img`
  padding: 15px;
  width: 60%;
`
const Tag = styled.span`
  position: fixed;
  left: 30px;
  background-color: #004899;
  color: white;
  border-radius: 50px;
  font-size: 12px;
  margin: 10px;
  padding: 3px 10px;
  text-transform: uppercase;
`
const Label = styled.h4`
  margin: 4px 0;
  font-size: 12px;
  color: #004899;
`
const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  align-content: center;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);

  }
`

export const Tarjeta = () => {
  return (
    <Container>
      <Card>
        <Img
          src="https://images.ctfassets.net/uf4sk9fqckkz/3P0OjhX15HyO2wioVHcthu/b05dfe7a30f010a005e1b8869b69bd1d/t-agulhinha-arroz.jpg?w=120&h=183&fl=progressive&q=100&fm=jpg"
          alt=""
        />
        <Label>ARROZ AGULHINHA 5kg</Label>
      </Card>
      <Card>
        <Img
          src="https://images.ctfassets.net/uf4sk9fqckkz/3P0OjhX15HyO2wioVHcthu/b05dfe7a30f010a005e1b8869b69bd1d/t-agulhinha-arroz.jpg?w=120&h=183&fl=progressive&q=100&fm=jpg"
          alt=""
        />
        <Label>ARROZ AGULHINHA 5kg</Label>
      </Card>
      <Card>
        <Img
          src="https://images.ctfassets.net/uf4sk9fqckkz/3P0OjhX15HyO2wioVHcthu/b05dfe7a30f010a005e1b8869b69bd1d/t-agulhinha-arroz.jpg?w=120&h=183&fl=progressive&q=100&fm=jpg"
          alt=""
        />
        <Label>ARROZ AGULHINHA 5kg</Label>
      </Card>
      <Card>
        <Img
          src="https://images.ctfassets.net/uf4sk9fqckkz/3P0OjhX15HyO2wioVHcthu/b05dfe7a30f010a005e1b8869b69bd1d/t-agulhinha-arroz.jpg?w=120&h=183&fl=progressive&q=100&fm=jpg"
          alt=""
        />
        <Label>ARROZ AGULHINHA 5kg</Label>
      </Card>
      <Card>
        <Img
          src="https://images.ctfassets.net/uf4sk9fqckkz/3P0OjhX15HyO2wioVHcthu/b05dfe7a30f010a005e1b8869b69bd1d/t-agulhinha-arroz.jpg?w=120&h=183&fl=progressive&q=100&fm=jpg"
          alt=""
        />
        <Label>ARROZ AGULHINHA 5kg</Label>
      </Card>
      <Card>
        <Img
          src="https://images.ctfassets.net/uf4sk9fqckkz/3P0OjhX15HyO2wioVHcthu/b05dfe7a30f010a005e1b8869b69bd1d/t-agulhinha-arroz.jpg?w=120&h=183&fl=progressive&q=100&fm=jpg"
          alt=""
        />
        <Label>ARROZ AGULHINHA 5kg</Label>
      </Card>
    </Container>
  )
}
