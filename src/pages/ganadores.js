import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const ganadores = () => {
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
  return (
    <Layout>
      <main className="contenedor">
        <Content>
          <Title>LISTA DE GANADORES DE LA CAPANPAÑA PANETON GLORIA 2022</Title>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Dirección</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jose Fernandez</td>
                <td>Kanagawa Ken</td>
              </tr>
              <tr>
                <td>Luis Miguel Matsusaka Ocana</td>
                <td>Shizuoka Ken</td>
              </tr>
              <tr>
                <td>Margarita Hernandez Luque</td>
                <td>Kanagawa Ken</td>
              </tr>
              <tr>
                <td>Roger Alejandro Broila Watanabe</td>
                <td>Gunma Ken</td>
              </tr>
              <tr>
                <td>Fabio Muniz</td>
                <td>Mie Ken</td>
              </tr>
              <tr>
                <td>Giovanna Paola Carazas Yamashiro</td>
                <td>Kanagawa Ken</td>
              </tr>
              <tr>
                <td>Mercedes Ywasaki</td>
                <td>Kanagawa Ken</td>
              </tr>
              <tr>
                <td>Sayuri Maeki</td>
                <td>Kanagawa Ken</td>
              </tr>
              <tr>
                <td>IKO BLAS AZUMI</td>
                <td>Mie Ken</td>
              </tr>
              <tr>
                <td>Jussara Do Carmo</td>
                <td>Yamanashi Ken</td>
              </tr>
              <tr>
                <td>Hiroko Kojima</td>
                <td>Aichi Ken</td>
              </tr>
              <tr>
                <td>Silvia Yessenia Robles</td>
                <td>Chiba Ken</td>
              </tr>
              <tr>
                <td>Cesar Yabiku Chavezs</td>
                <td>Kanagawa Ken</td>
              </tr>
              <tr>
                <td>Cynthia Nakachi Kishimoto</td>
                <td>Hyogo Ken</td>
              </tr>
              <tr>
                <td>Luiz Abe Zeniti</td>
                <td>Nagano Ken</td>
              </tr>
              <tr>
                <td>Kioko Gomez</td>
                <td>Mie Ken</td>
              </tr>
              <tr>
                <td>Emilio Juan Kamizono Shimokawa</td>
                <td>Kanagawa Ken</td>
              </tr>
              <tr>
                <td>Roxana Leon de Arakaki</td>
                <td>Kanagawa Ken</td>
              </tr>
              <tr>
                <td>Luis Enrique Harada</td>
                <td>Kanagawa Ken</td>
              </tr>
              <tr>
                <td>Rosa Esther Nakahodo Gonzales</td>
                <td>Kanagawa Ken</td>
              </tr>
              <tr>
                <td>Nora Cecilia Bazan Nishijima</td>
                <td>Aichi Ken</td>
              </tr>
              <tr>
                <td>Jose Eduardo Tanaka Juarez</td>
                <td>Shiga Ken</td>
              </tr>
            </tbody>
          </table>
        </Content>
      </main>
    </Layout>
  )
}

export default ganadores
