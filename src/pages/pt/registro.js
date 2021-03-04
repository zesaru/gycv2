import React from 'react';
import Layout from "../../components/layoutp"
import '../../pages/registro.scss';

const registro = ()=> {
    return (
      <Layout>
        <main className="contenedor">
          <article>
            <div className="google-form">
              <iframe title="registro" src="https://docs.google.com/forms/d/e/1FAIpQLSe94KPUou3ORMOr9DvH0Tf4F_4ee0SlegB0i0V25XsP99oZfA/viewform?embedded=true" width="100%" height="766" frameBorder="0" marginHeight="0" marginWidth="0">Cargando...</iframe>
            </div>
          </article>
        </main>
      </Layout>
    )
}
export default registro
