import React from 'react';
import Layout from '../../components/layoutp';
import '../../pages/empresa.css';
import styled from "styled-components"

const Content = styled.article`
  text-align:left
`

const sevebuenazo = () => {
    return (
        <Layout >
            <main className="contenedor">
                <Content>
                    <h4>REGULAMENTO DO CONCURSO</h4>
                    <br />
                    <h5>Do concurso</h5>
                    <p>
                    <br/>1- A finalidade deste concurso é incentivar o preparo de um prato utilizando alguns
                    dos vários produtos de nossas marcar corporativas: Caprichosa, Peru Chef, Framidia
                    e Dona Meche .
                    <br/>2- O tema do prato e livre, entendendo que se valorizará a originalidade, a aparência
                    e decoração.
                    <br/>3- Haverá 3 ganhadores de cestas com produtos G&C Corporation.
                    <br/>4- Menores de idade poderão participar desse que seja autorizados pelos pais e/ou
                    tutores.
                    <br/>5- Terá q enviar uma foto digital por participante até domingo, 25 de julho via
                    correio eletrônico.
                    <br/>6- O resultado do concurso saíra no dia 30 de julho deste ano e será publicado nos
                    diversos meios de comunicação da comunidade,na página web de G&C Corporation
                    e Facebook.
                    <br/>7- O correio eletrônico para o concurso é: sevebuenazo@gyc-corp.com
                    </p>
                    <br/>
                    <h5>Do participante</h5>
                        <p>
                        <br/>1- Deverá enviar um correio eletrônico juntamente com uma imagem de foto digital
                        tirada de um celular ou câmera digital.
                        <br/>2- Deverá  aparecer na foto os produtos (de nossas marcas) q foram utilizados na
                        preparação do prato.
                        <br/>3- Deverá incluir no correio eletrônico os seguintes dados:
                        <br/>a) Resenha do prato
                        <br/>b) nome completo e/ou pseudônimo
                        <br/>c) endereço completo e código postal
                        <br/>d) telefone de contato
                        <br/>e)Nacionalidade
                        <br/>f) data de nascimento
                        <br/>4- Em caso de várias pessoa da mesma família os e-mails devem ser enviados
                        individualmente com seus dados.
                        <br/>5) Os participantes devem residir no Japão.
                        <br/>6) Todos os dados e às imagens serão de uso exclusivo e interno da empresa.
                        </p>
                    <br/>
                    <h5>Do Ganhador</h5>
                    <p>
                        <br/>1- Autorização a empresa G&C Corporation a publicação de seus dados para a
                        divulgação do resultado do concurso.
                        <br/>2- As fotos dos 3 ganhadores será publicado no almanaque corporativo de 2022, q
                        será distribuído no presente ano, com as resenhas do concurso.
                        <br/>3- Os prêmios serão enviados diretamente no endereço dos ganhadores, depois de
                        comunicado por telefone e/ou correio eletrônico.
                        <br/>4- Receberá seus prêmios na direção postal que indicaram por telefonei/ ou por
                        correio eletrônico.
                        <br/>5- Qualquer mudança, os gastos extras será assumido pelo ganhador.
                        <br/>6- A renúncia ao prêmio não dará nenhum direito de indenização, remuneração e/ou
                        compensação econômica.
                        <br/>7- Se não puder estabelecer uma comunicação com um dos ganhadores no prazo
                        máximo de 1 semana o prêmio será sorteado entre os participantes.
                    </p>
                </Content>
            </main>
        </Layout>
    );
}

export default sevebuenazo;