import React from 'react';
import Layout from "../../components/layoutj"
import '../../pages/registro.scss';

const registro = () => {
  return (
    <Layout>
      <main className="contenedor">
        <article>
          <div className="google-form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeLmXLHLWb8K2kY93_Q-y7zN6MkqyGUsDfNuzWTeOpZ5GIAWA/viewform?embedded=true" width="100%" height="766" frameBorder="0" marginHeight="0" marginWidth="0">Cargando...</iframe>
          </div>
        </article>
      </main>
    </Layout>
  );
}

export default registro;