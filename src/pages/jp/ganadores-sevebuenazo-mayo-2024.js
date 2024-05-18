import React from "react"
import Layout from "../../components/layoutj"
import styled from "styled-components"
import ganadoressevebuenazo2022 from "../../static/img/1banners-SeVeBuenazo-ganadores-2024.5.jpg"

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
          <img className="mx-auto" src={ganadoressevebuenazo2022} alt="gyccorp" />

          <Title>
          A continuación los ganadores del 5to concurso Se Ve Buenazo.
          </Title>
          <br />
          <ContenInner>
            <br />
            <p>
            Públicamos y felicitamos a nuestras ganadoras del 5to concurso ”Se ve Buenazo”, edición por el día
de las madres.
            </p>
            <p>
            第5回(母の日版)コンクール「セ・ベ・ブエナソ」の優勝者の方々の発表です！
            </p>
            <br />
            <p>Muchas gracias por su participación.</p>
            <br />
            <p className="font-semibold"> GANADOR 1</p>
            <p>Julio Sato</p>
            <br />
            <p className="font-semibold"> GANADOR 2</p>
            <p>Fernanda Retuerto</p>
            <br />
            <p className="font-semibold"> GANADOR 3</p>
            <p>Martin Alejandro</p>
            <br />
            <p className="font-bold">G&C Corporation</p>
          </ContenInner>
        </Content>
      </main>
    </Layout>
  )
}

export default ganadores
