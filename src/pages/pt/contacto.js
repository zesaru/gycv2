import React from 'react';
import Layout from '../../components/layoutp';
import '../../pages/contacto.css';
import contactopng from '../../static/img/contacto.png';

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
            <h4>Nos Ligue Sem Compromisso.</h4>
            <br />
            <p>Contacto</p>
            <br />
            email: info@gyc-corp.com
            <br />
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