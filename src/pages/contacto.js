import React from 'react';
import Layout from '../components/layout';
import '../pages/contacto.scss';
import contactopng from '../static/img/contacto.png';

const contacto = () => {
  return (
    <Layout>
      <main className="contenedor">
        <article>
          <div>
            <div className='img-container'>
              <img className='img-contacto' alt='contacto GYC' src={contactopng} />
            </div>
            <h3>G&C CORPORATION CO., Ltd.</h3>
            <br />
            <h4>Importadora de productos peruanos</h4>
            <br />
            <p>Contacto</p>
            <br />
            email: info@gyc-corp.com
            <br />
            <p>Si desea información sobre alguno de nuestros productos, llámenos sin compromiso.</p>
            <br />
            <p>telefonos:</p>
            <p>(81) 0594 25 8353</p>
            <p>(81) 0594 25 8002</p>
          </div>
        </article>
      </main>
    </Layout>
  );
}

export default contacto;