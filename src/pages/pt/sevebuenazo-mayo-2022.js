import React from 'react';
import Layout from '../../components/layoutp';
import '../../pages/empresa.css';
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

const sevebuenazo = () => {
  return (
    <Layout>
      <main className="contenedor">
        <Content>
          <Titulo>REGLAMENTO DEL 3er CONCURSO</Titulo>
          <br />
          <Titulo>“SE VE BUENAZO”</Titulo>
          <Titulo>“Feliz día Mama”</Titulo>

          <br />
          <Parrafo>
            1. La finalidad de este concurso es la de incentivar la preparación de
            un potaje o platillo, de cualquier país, utilizando como insumo
            alguno (o varios) de los productos de nuestras marcas corporativas:
            Peru Chef-f, Caprichosa Framidia y Doña Meche.
            <br />
            2. El tema de preparación es libre, entendiendo que se valorará la
            originalidad, vistosidad y decoración de la imagen a recibir.
            <br />
            3. Serán 3 los ganadores de canastas con productos de G&C
            Corporation.
            <br />
            4. Los menores de edad pueden participar en el concurso bajo
            responsabilidad total de sus padres y/o tutores.
            <br />
            5. Se recibirá una imagen (foto digital) por participante hasta el
            sábado 14 de mayo, vía correo electrónico.
            <br />
            6. El resultado del concurso se conocerá el día 21 de mayo del
            presente año y se publicará en los diversos medios de la
            colectividad, así como en la página web de G&amp;C Corporation y
            Facebook institucional.
            <br />
            7. El correo electrónico habilitado para el concurso es
            sevebuenazo@gyc-corp.com
          </Parrafo>
          <br />
          <h5>Del Participante:</h5>
          <br />
          <Parrafo>
            1. Deberá enviar un correo electrónico adjuntando una imagen o foto
            digital (tomada de un celular o de una cámara digital).
            <br />
            2. Deberá aparecer dentro de la foto enviada, el producto (o los
            productos) que fueron utilizados en la preparación.
            <br /> 3. Consignará dentro del correo electrónico los siguientes:
            <br />
            a) Reseña del plato (ingredientes, preparación y detalles culturales
            y/o regionales del mismo).
            <br />
            b) Nombre completoy/o seudónimo.
            <br />
            c) Dirección (incluyendo los códigos postales (tanto del
            participante como de la agasajada).
            <br />
            d) Numero de teléfono de contacto
            <br />
            e) Nacionalidad.
            <br />
            f) Fecha de nacimiento.
            <br />
            g) Lugar de celebración a la agasajada por el Dia de las Madres.
            <br />
            4. En caso se utilice un mismo correo electrónico para enviar varias
            imágenes de varios participantes (dentro de una misma familia), los
            correos deberán ser enviados de manera individual (un correo/un
            participante) y consignar debidamente todos los datos solicitados.
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
            2. Las fotos de los 3 ganadores serán publicadas en el almanaque
            corporativo del 2023, que será distribuido en diciembre del presente
            año, con las reseñas del concurso.
            <br />
            3. Los 3 premios (dobles) serán enviados directamente a las
            direcciones ganadoras, previa comunicación telefónica y/o por correo
            electrónico.
            <br />
            4. Recibirán sus respectivos premios en las direcciones postales que
            señalaron en los correos electrónicos.
            <br />
            5. Cualquier cambio del punto anterior (4), los gastos serán
            asumidos por el ganador.
            <br />
            6. La renuncia al premio no dará ningún derecho de indemnización,
            remuneración y/o compensación económica.
            <br />
            7. De no poder establecer comunicación con alguno de los ganadores
            en un máximo de 1 semana, el premio será sorteado entre los demás
            participantes.
            <br />
          </Parrafo>
        </Content>
      </main>
    </Layout>
  )
}

export default sevebuenazo
