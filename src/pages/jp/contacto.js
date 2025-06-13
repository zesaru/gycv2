import React from 'react';
import Layout from '../../components/layoutj';
import './contacto.css';
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
            <h4>南米食品の輸入卸業者</h4>
            <br />
            <p>お問合せ先</p>
            <br />
            email: info@gyc-corp.com
            <br />
            <p>ご連絡お待ちしております。</p>
            <br />
            <p>営業時間：月曜〜金曜　9:00 AM〜7:00</p>
            <p>PM 土曜　9:00 AM 〜 5:00 PM。</p>
            <p>(81) 0594 25 8353</p>
            <p>(81) 0594 25 8002</p>
          </div>
        </article>
      </main>
    </Layout>
  );
}

export default contacto;