import React from 'react';
import Layout from '../../components/layoutj';
import '../empresa.css';
import styled from "styled-components"

const Content = styled.article`
  text-align: left;
  padding: 2rem;
`
const Titulo = styled.h4`
  text-align: center;
`

const Parrafo = styled.p`
  line-height: 1.6;
`

const sevebuenazo = () => {
  return (
    <Layout>
      <main className="contenedor">
        <Content className="p-4">
          <Titulo>REGLAMENTO DEL 5to CONCURSO</Titulo>
          <br />
          <Titulo>“SE VE BUENAZO”</Titulo>
          <Titulo>“Feliz día Mamá</Titulo>

          <br />
          <Parrafo>
            1. La finalidad de este concurso es la de incentivar la preparación de un potaje o platillo, de cualquier país, utilizando como insumo los productos de nuestras marcas corporativas: Peru Chef-f, Doña Meche, Framidia y Caprichosa.
            <br />
            2. El tema de preparación es libre, entendiendo que se valorará la originalidad, vistosidad y decoración de la imagen a recibir.

          <br />
            3. Serán 3 ganadores dobles (del participante y de la persona agasajada) de canastas con productos de G&C Corporation.
            <br />
            4. Los menores de edad pueden participar en el concurso bajo responsabilidad total de sus padres y/o tutores. <br />
            5. Se recibirá una imagen (foto digital) por participante hasta el lunes 12 de mayo, vía correo electrónico. <br />
            6. El resultado del concurso se conocerá el día 17 de mayo del presente año y se publicará en los diversos medios de la colectividad, así como en la página web de G&C Corporation y Facebook institucional
            <br />
            7. El correo electrónico habilitado para el concurso es sevebuenazo@gyc-corp.com 
            <br />
          </Parrafo>
          <br />
          <h5>Del Participante:</h5>
          <br />
          <Parrafo>
            1. Deberá enviar un correo electrónico adjuntando una imagen o foto digital (tomada de un celular o de una cámara digital).<br />
            2. Deberá aparecer dentro de la foto enviada, el producto (o los productos) que fueron utilizados en la preparación.

            <br />
            3. Consignará dentro del correo electrónico los siguientes datos:
            <br />
            <div className="pl-4">
              a) Reseña del plato (ingredientes, preparación y detalles culturales y/o regionales del mismo).

              <br />
              b) Nombre completo y/o seudónimo.
              <br />
              c) Dirección (incluyendo los códigos postales) tanto del participante como de la agasajada.

              <br />
              d) Número de teléfono de contacto (participante y agasajada)
              <br />
              e) Nacionalidad.              .
              <br />
              f) Fecha de nacimiento.

              <br />
              g) Lugar de celebración a la agasajada por el Dia de las Madres.
              <br />
            </div>
            4. En caso se utilice un mismo correo electrónico para enviar varias imágenes de varios participantes (dentro de una misma familia), los correos deberán ser enviados de manera individual (un correo/un participante) y consignar debidamente todos los datos solicitados. 
            <br />
            5. Deberán residir en Japón.
            <br />
            6. Los datos y las imágenes serán de uso exclusivo e interno de la empresa.
            <br />
          </Parrafo>
          <br />
          <h5>Del Ganador:</h5>
          <Parrafo>
            <br />
            1. Autoriza a G&amp;C Corporation la publicación de sus datos a fin
            de dar a conocer los resultados del concurso. <br />
            2. Las fotos de los 3 ganadores serán publicadas en el almanaque
            corporativo del 2026, que será distribuido en diciembre del presente
            año, con las reseñas del concurso. <br />
            3. Los 3 premios (dobles) serán enviados directamente a las direcciones ganadoras, previa comunicación telefónica y/o por correo electrónico.
            <br />
            4. Recibirán (participante y agasajada) sus respectivos premios en las direcciones postales que señalaron en los correos electrónicos .
            <br />
            5. Cualquier cambio del punto anterior (4), los gastos serán asumidos por el ganador.
            <br />
            6. La renuncia al premio no dará ningún derecho de indemnización, remuneración y/o compensación económica.
            <br />
            7. De no poder establecer comunicación con alguno de los ganadores en un máximo de 1 semana, el premio será sorteado entre los demás participantes.

            <br />
          </Parrafo>
        </Content>
      </main>
    </Layout>
  )
}


export default sevebuenazo
