import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import ganadoressevebuenazo2022 from "../static/img/banners-SeVeBuenazo-ganadores2022.jpg"

const Content = styled.article`
  text-align: left;
`

const ContenInner = styled.p`
  font-size: 16px;
  line-height: 1.6em;
  padding: 12px;
`
const Title = styled.h4`
  padding: 10px;
  font-size: 20px;
  text-align: center;
`

const ganadores = () => {
  return (
    <Layout>
      <main className="contenedor">
        <Content>
          <img src={ganadoressevebuenazo2022} alt="gyccorp" />

          <Title>
            A continuación las ganadoras del 3er concurso Se Ve Buenazo. Día de
            la madre.
          </Title>
          <br />
          <ContenInner>
            <br />
            <p>
              Públicamos y felicitamos a nuestras ganadoras del 3er concurso ”Se
              ve Buenazo”, edición por el día de las madres.
            </p>
            <p>
              第3回(母の日版)コンクール「セ・ベ・ブエナソ」の優勝者の方々の発表です！
            </p>
            <br />
            <p>Muchas gracias por su participación.</p>
            <br />
            <p> 1 Angela Tanaka</p>
            <p> 2 Yuriko Daddle </p>
            <p> 3 Zoila Tapia</p>
            <br />
            <p>G&C Corporation</p>
          </ContenInner>
        </Content>
      </main>
    </Layout>
  )
}

export default ganadores
