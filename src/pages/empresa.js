import React from 'react';
import Layout from '../components/layout';
import './empresa.css';
import empresajpg from '../static/img/empresa.jpg'

const empresa = () => {
  return (
    <Layout >
      <main className="contenedor">
        <article>

          <img className='imagenempresa' src={empresajpg} alt="gyccorp" />
          <h3>G&amp;C CORPORATION</h3><br /><br />
          <h4>Perfil de la empresa</h4>
          <p>Somos una empresa dedicada al ramo de  Importación, distribución, operaciones logísticas y proyectos de inversión, dentro del archipiélago japonés.</p>
          <p>El accionar de la empresa que cuenta con el respaldo de marcas y empresas de prestigio en el mercado peruano local e internacional, demuestra la importancia de la introducción de los productos peruanos en el mercado asiático.</p>
          <p>Los proveedores y las empresas con las que mantenemos estrecha relación y vínculos comerciales son:</p><br />
          <ul>
            <li>   CORPORACIÓN LINDLEY S.A. </li>
            <li>   GLORIA S.A. </li>
            <li>   DESHIDRATADORA DE ALIMENTOS NATURALES S.R.L.</li>
            <li>   KIKKO CORPORATION S.A. </li>
            <li>   CV EXIMP S.A.C. </li>
            <li>   DESTILERIAS UNIDAS S.A.C. </li>
            <li>   PRODUCTOS EXTRAGEL Y UNIVERSAL S.A.C.  (PEUSAC) </li>
            <li>   BODEGAS Y VIÑEDOS TABERNERO S.A.C. </li>
            <li>   UNIÓN DE CERVECERÍAS PERUANAS BACKUS Y JOHNSTON S.A.A. </li>
            <li>   ARCA CONTINENTAL </li>
            <li>   THE GREEN FARMER S.A.C </li>
            <li>   BONALI S.A </li>
            <li>   QUECHUA FOODS </li>
            <li>   PERUVIAN NATURE </li>
            <li>   FRUTEX S.A </li>
            <li>   AGROINDUSTRAS EMIC </li>
            <li>   NOBEX S.A </li>
          </ul>
          <br />

          <h4>Misión</h4>
          <p>Introducir al mercado japonés productos latinoamericanos con los mayores y mejores niveles de calidad y presentación a un precio competitivo; mostrar dentro del mercado japonés el alto nivel nutritivo de los productos latinoamericanos en general y peruanos en particular; darle un valor agregado a los productos que importamos convirtiéndolos no solo en bienes de consumo sino en una muestra de la cultura y tradiciones latinoamericanas; brindar el mejor servicio tanto a nuestros clientes como al consumidor final de nuestros productos.</p>
          <br />
          <h4>Visión:</h4>
          <p>Consolidarnos como un puente comercial y de negocios entre Latinoamérica y Japón, pero también entre Japón y Sudamérica ya que existe una gran variedad de productos japoneses que resultarían sumamente rentables e innovadores dentro del mercado latinoamericano. A la vez, estamos en camino de establecer un modelo comercial, de negocios e inversión que incorpore y aproveche los mejores aspectos de ambos mercados con la finalidad de facilitar el flujo de productos e información, minimice los costos y mantenga o aumente la calidad de los productos con los que trabajamos.</p>
          <br />
          <h4>Valores:</h4>
          <p>El trabajo de G&C Corporation tiene como pilares fundamentales la ética en todos los niveles de la empresa y en las relaciones que establecemos con el exterior; la lealtad a nuestros inversionistas, socios, clientes y distribuidores; la eficiencia y el respeto en todas las acciones que desarrollamos; y el respeto y cuidado del medio ambiente como premisas fundamentales a la hora de seleccionar los productos con los que trabajamos.</p>
          <br />
          <h4>Responsabilidad Social:</h4>
          <p>Asimismo y por sentirnos orgullosos de nuestra herencia cultural, apoyamos y patrocinamos todo tipo de actividades y eventos que preserven, impulsen y difundan nuestra cultura y tradiciones, o que contribuyan al acercamiento de nuestros pueblos.</p>
        </article>
      </main>
    </Layout>
  );
}

export default empresa;