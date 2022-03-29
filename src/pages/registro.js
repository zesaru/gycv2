import React from 'react';
import Layout from '../components/layout';
import '../pages/registro.css';

const registro = () => {
  return (
    <Layout>
      <main className="contenedor">
        <article>
          <div className="google-form">
            <iframe title="registro" src="https://docs.google.com/forms/d/e/1FAIpQLSdTadGxJrpapcPsArJQRaHzeSWqW2Jb7sj3U1yg_ao4LH_miw/viewform?embedded=true" width="100%" height="766" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>
          </div>
        </article>
      </main>
    </Layout>
  );
}

export default registro;