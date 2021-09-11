import React from "react"
import Layout from "../../components/layoutp"
import styled from "styled-components"

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

const Subtitle = styled.span`
  font-weight: bolder;
`
const Indented = styled.span`
  padding-left: 10px;
`
const navidad = () => {
  return (
    <Layout>
      <main className="contenedor">
        <Content>
          <Title>REGULARMENTO SORTEIO PANETON GLORIA 2021</Title>
          <br />
          <ContenInner>
            <Subtitle>Sorteio:</Subtitle>
            <br />
            1. Será sorteado um total de 55 prêmios.
            <br /> a)Cinco (05) passagens aéreas a cidade de Okinawa com direito
            a acompanhante e hospedagem de 4 dias e 3 noites (1 quarto para os
            2)
            <br /> b) 50 cestas com produtos G&amp;C Corporation.
            <br />
            2. Menores de idade podem participar desde que os pais ou
            responsável esteja ciente da participação do menor (o nome do
            responsável deve estar no cupom).
            <br />
            3. Só será aceita a caixa do panetone de 900g, deverá recortar a
            parte onde fica a figura “Campaña Panetón Gloria”, atrás do recorte
            deve preencher com seus dados.
            <br />
            4. Qualquer outra parte da caixa será invalidado, assim como cópias
            ou adulteração da parte indicada.
            <br />
            5. O sorteio será realizado no dia 12/02/2022 nas instalações da
            empresa G&amp;C Corporation.
            <br />
            6. Os resultados será publicado nos diversos meios de comunicação da
            comunidade, assim como na página web da empresa G&amp;C Corporation.
            <br />
            7. O resultado do sorteio será filmado e publicado na nossa página
            web e Facebook.
            <br />
            8. Os recortes das caixas de panetones serão aceitas até o dia
            10/02/2022 via correio no seguintes endereços:
            <br />
            a) G&amp;C Corporation Cod. Postal 511-0001 Mie Ken Kuwana Shi Oaza
            Kaminowashinden 1418. 
            <br />b) G&amp;C Corporation. Cod. Postal 505-0052
            Gifu Ken Minokamo Shi Kamono Cho Imaizumi 1261.
            <br />
            9. Poderá depositar os cupons no local onde foram comprados,
            deixando claro que é de responsabilidade dos participantes fazer com
            q chegue ao destino mencionado.
            <br />            <br />

            <Subtitle>
            Participante:
            </Subtitle>
            <br />
            1. Deverá preencher em letra legível o seguintes dados:
            <br />
            a) Nome completo.
            <br />
            b) endereço completo e código postal.
            <br />
            c) endereço de e-mail.
            <br />
            d) nacionalidade.
            <br />
            e) telefone de contato (fixo e celular).
            <br />
            f) data de nascimento.
            <br />
            g) Indicar lugar e onde comprou o panetone.
            <br />
            2. A mesma pessoa pode participar por várias vezes no mesmo sorteio,
            entendendo q poderá ganhar mais de um prêmio.
            <br />
            3. Cada cupom é uma chance de participar (enviados pelo correio ou
            nos pontos de coleta onde foram comprados), todos os cupons deverão
            ser preenchido com os dados do participante.
            <br />
            4. Os dados de cada participante serão de uso exclusivo e interno da
            empresa.
            <br />
            5. Será aceito cupons enviados em um só envelope, já que serão
            revisados 1 a 1. 
            <br />
            <br />
            <Subtitle>
            Ganhador:
            </Subtitle>
            <br />
            1. Autorizar a G&amp;C Corporation a publicação de seus dados afim
            de publicar os resultados do sorteio.
            <br />
            2. As 05 passagens (com acompanhantes) terão as seguintes
            observações:
            <br />
            a) As passagens serão de ida e volta com datas fixas em classe
            econômica.
            <br />
            b) As datas serão iguais para o ganhador e acompanhante indicada
            pelo Ganhador.
            <br />
            c) Deverá definir e indicar à agência de viagem as datas do voo até
            19 de fevereiro/2022.
            <br />
            d) A passagem poderá ser utilizada no seguinte período: 20/ março a
            23/ abril de 2022. Qualquer mudança (especificados no ponto a) e b))
            serão de responsabilidade do ganhador, o próprio deverá assumir os
            gastos extras.
            <br />
            e) A passagem poderá ser endossada a terceiros. Os custos extras
            deverá ser de responsabilidade do ganhador. A empresa G&amp;C
            Corporation não se responsabiliza por qualquer extra adicional ou
            perda da passagem. e) as saídas dos voos será das cidades de Kansai,
            Chubu Nagoya, Haneda e Narita.
            <br />
            f) Se o destino final e indicado em outras datas ou o aumento de
            dias em hospedagem os gastos extras será de responsabilidade do
            ganhador.
            <br />
            3. A renúncia ao prêmio nao dará nenhum direito à indenização,
            remuneração ou compensação econômica.
            <br />
            4. 55 prêmios serão enviados diretamente ao endereço do ganhador
            após comunicação por telefone ou e-mail.
            <br />
            5. Os ganhadores das passagens serão os primeiros 05 sorteados,
            sendo que os 50 restantes correspondem as cestas.
            <br />
            6. Em caso de anulação será sorteados 5 mais até q se conclua a
            premiação.
            <br />
            7. Se não for possível estabelece uma comunicação com os ganhadores
            das passagens, tem um prazo de 5 dias desde a realizacao do sorteio,
            os ganhadores serão anulados, sendo assim o ganhador seguinte e será
            premiado a a partir do sexto sorteado. Essa forma de aplicará em
            todos os casos.
          </ContenInner>
        </Content>
      </main>
    </Layout>
  )
}
export default navidad
