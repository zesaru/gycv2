import React from 'react';
import Layout from '../../components/layoutp';
import '../../pages/empresa.css';
import empresajpg from '../../static/img/empresa.jpg'

const empresa = () => {
  return (
    <Layout >
      <main className="contenedor">
        <article>

          <img className='imagenempresa' src={empresajpg} alt="gyccorp" />
          <h3>G&amp;C CORPORATION</h3><br /><br />
          <h4>PERFIL DA EMPRESA</h4>
          <p>Somos uma empresa voltada para a área de importação, distribuição, operações logística e projetos de investimento dentro do arquipélago japonês.</p>
          <p>As atividades da empresa, que conta com o apoio de marcas de prestígio e empresas do mercado peruano local e internacional, demonstram a importância da introdução de produtos peruanos no mercado asiático.</p>
          <p>Los proveedores y las empresas con las que mantenemos estrecha relación y vínculos comerciales son:</p>
          <ul>
            <li>   CORPORAÇÃO  LINDLEY S.A. </li>
            <li>   GLORIA S.A. </li>
            <li>   DESIDRATADORA DE ALIMENTOS NATURAIS S.R.L. </li>
            <li>   KIKKO CORPORATION S.A. </li>
            <li>   CV EXIMP S.A.C. </li>
            <li>   DESTILARIAS UNIDAS S.A.C. </li>
            <li>   PRODUTOS EXTRAGEL Y UNIVERSAL S.A.C.  (PEUSAC) </li>
            <li>   BODEGAS E VINHEDOS TABERNERO S.A.C.</li>
            <li>   UNIÃO  DE CERVEJARIAS PERUANAS BACKUS Y JOHNSTON S.A.A. </li>
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

          <h4>Missão:</h4>
          <p>Introduzir ao mercado japonês produtos latino-americanos, com os maiores e melhores níveis de qualidade e apresentação a preço competitivo; mostrar dentro do mercado japonês o alto nível nutritivo dos produtos latino-americanos em geral, e especialmente os peruanos; valorizar os produtos que importamos, transformando-os não só em bens de consumo, mas em uma amostra da cultura e tradições latino-americanas, proporcionando o melhor serviço tanto aos nossos clientes quanto aos consumidores finais de nossos produtos.</p>
          <br />
          <h4>Visão:</h4>
          <p>O trabalho da G & C Corporation tem como pilares fundamentais a ética em todos os níveis da empresa e nas relações que estabelecemos com o ambiente exterior; a lealdade com nossos investidores, sócios, clientes e distribuidores; eficiência e respeito em todas as ações que desenvolvemos; respeito e cuidado com o meio ambiente como premissas fundamentais no momento de selecionarmos os produtos com os quais trabalhamos.</p>
          <br />
          <h4>Valores:</h4>
          <p>O trabalho da G & C Corporation tem como pilares fundamentais a ética em todos os níveis da empresa e nas relações que estabelecemos com o ambiente exterior; a lealdade com nossos investidores, sócios, clientes e distribuidores; eficiência e respeito em todas as ações que desenvolvemos; respeito e cuidado com o meio ambiente como premissas fundamentais no momento de selecionarmos os produtos com os quais trabalhamos.</p>
          <br />
          <h4>Responsabilidade Social:</h4>
          <p>Do mesmo modo e por nos sentirmos orgulhosos da nossa herança cultural, apoiamos e patrocinamos todos os tipos de atividades e eventos que buscam preservar, promover e divulgar a nossa cultura e tradições, ou que contribuam para a aproximação dos nossos povos.</p>
        </article>
      </main>
    </Layout>
  );
}

export default empresa;