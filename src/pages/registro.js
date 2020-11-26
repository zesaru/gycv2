import React from 'react';
import Layout from '../components/layout';
import '../pages/registro.scss';

const registro = () => {
  return (
    <Layout>
      <main className="contenedor">
        <article>
          <div className="google-form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdTadGxJrpapcPsArJQRaHzeSWqW2Jb7sj3U1yg_ao4LH_miw/viewform?embedded=true" width="800" height="3050" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>
          </div>
        </article>
      </main>
    </Layout>
  );
}

export default registro;