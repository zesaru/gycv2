import React from "react"
import Layout from "../components/layout"
import "./empresa.css"
import styled from "styled-components"

const Content = styled.article`
  text-align: left;
`
const Titulo = styled.h4`
  text-align: center;
`

const Parrafo = styled.p`
  line-height: 1.6;
`

const sebebebuenazo = () => {
  return (
    <Layout>
      <main className="contenedor">
        <Content>
          <Titulo>REGLAMENTO DEL 2do CONCURSO</Titulo>
          <br />
          <Titulo>“SE BEBE BUENAZO”</Titulo>
          <Titulo>“Feliz día playero”</Titulo>

          <br />
          <Parrafo>
            1. La finalidad de este concurso es la de compartir frases alusivas “cheleras”, cuando brindamos, esta vez en la playa, con una de nuestras 3 marcas de cervezas peruanas: Cusqueña, Pilsen Callao o Cristal.

            <br />
            2. Las frases a expresar son libres; tomando en consideración de no exagerar con un vocabulario soez y proclive a la finalidad del mismo.

            <br />
            3. Se filtrarán y descartarán los videos que desvirtúen el mensaje claro de brindis y celebración.

            <br />
            4. No promovemos el consumo de bebidas alcohólicas para este concurso. Las botellas pueden estar sin destapar para la edición del video.

            <br />
            5. Serán 3 ganadores que recibirán -cada uno- una caja (24 unidades) de cada marca de cerveza peruana (72 unidades en total) y un set de vasos “cheleros”.

            <br />
            6. Los menores de 20 años quedan prohibidos de participar.
            <br />
            7. Se recibirá un video por participante, no más de 20 segundos, hasta las 20 horas del día viernes 18 de agosto, vía correo electrónico.  
            <br />
            8. El resultado del concurso se conocerá el día 19 de agosto del presente año y se publicará en los diversos medios de la colectividad, así como en la página web corporativa y Facebook institucional

            <br />
            9. El correo electrónico habilitado para el concurso es sebebebuenazo@gyc-corp.com 
          </Parrafo>
          <br />
          <h5>Del Participante:</h5>
          <br />
          <Parrafo>
            1. Deberá enviar un correo electrónico adjuntando un video (máximo 20 segundos) y detallar la frase alusiva de celebración.

            <br />
            2. Deberá aparecer dentro del video, una de las 3 marcas de cerveza que importamos, y tal fue indicado anteriormente, no será necesario que la botella de cerveza la muestre destapada.

            <br />
            3. Consignará dentro del correo electrónico los siguientes:
            <br />
            a) Frase de celebración.
            <br />
            b) Nombre completo y/o seudónimo.
            <br />
            c) Dirección (incluyendo el código postal)
            <br />
            d) Numero de teléfono de contacto
            <br />
            e) Nacionalidad.
            <br />
            f) Fecha de nacimiento.
            <br />
            g) Lugar de celebración .
            <br />
            4. En caso se utilice un mismo correo electrónico para enviar videos de varios participantes (dentro de una misma familia), los correos deberán ser enviados de manera individual (un correo/un participante) y consignar debidamente todos los datos solicitados.
            <br />
            5. Deberán residir en Japón.
            <br />
            6. Los datos y las imágenes serán de uso exclusivo e interno de la
            empresa.
          </Parrafo>
          <br />
          <h5>Del Ganador:</h5>
          <Parrafo>
            <br />
            1. Autoriza a G&amp;C Corporation la publicación de sus datos a fin
            de dar a conocer los resultados del concurso.
            <br />
            2. Los videos de los 3 ganadores serán publicados en nuestro Facebook corporativo; así como haremos una toma de alguna parte del video para publicarlo en el almanaque corporativo del 2024, que será distribuido en diciembre del presente año, con las reseñas del concurso. 
            <br />
            3. Los 3 premios serán enviados directamente a las direcciones ganadoras, previa comunicación telefónica y con la acreditación de contar con mayoría de edad a través de algún documento personal (brevete, DNI, pasaporte, tarjeta de residencia “Zairyu Kado”, seguro de salud, etc.)
            <br />
            4. Una vez acreditemos, enviaremos sus respectivos premios en las direcciones postales que señalaron en los correos electrónicos. 

            <br />
            5. Cualquier cambio del punto anterior (4), los gastos serán asumidos por el ganador.
            <br />
            6. La renuncia al premio no dará ningún derecho de indemnización, remuneración y/o compensación económica.
            <br />
            7. De no poder establecer comunicación con alguno de los ganadores en un máximo de 1 semana, posterior al sorteo, el premio será nuevamente sorteado entre los demás participantes.

            <br />
          </Parrafo>
        </Content>
      </main>
    </Layout>
  )
}

export default sebebebuenazo
