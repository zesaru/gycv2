import React from "react"
import Sliders from "../../components/sliders"
import Layout from "../../components/layoutp"
import Seo from "../../components/seo"
import { Smallbanners } from "../../components/smallbanners"

const IndexPage = () => (
  <Layout>
    <Seo 
      title="Início - Distribuidora de Bebidas e Alimentos" 
      description="G&C Corp - Distribuidora líder de bebidas e alimentos de qualidade. Encontre as melhores marcas para o seu negócio."
      keywords="distribuidora bebidas, alimentos qualidade, G&C Corp, produtos negócio"
      lang="pt"
    />
    <main className="contenedor">
        <article>
          <Sliders></Sliders>
        </article>
      <Smallbanners></Smallbanners>    
    </main>
  </Layout>
)

export default IndexPage