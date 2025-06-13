import React from "react"
import Sliders from "../components/sliders"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Smallbanners } from "../components/smallbanners"
import StructuredData, { createOrganizationData, createWebsiteData } from "../components/structured-data"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const siteUrl = data.site.siteMetadata.siteUrl

  return (
    <Layout>
      <Seo 
        title="Inicio - Importadora y Distribuidora de Bebidas y Alimentos" 
        description="G&C Corp - Importadora y distribuidora líder de bebidas y alimentos de calidad en Japón. Encuentra las mejores marcas peruanas para tu negocio."
        keywords="distribuidora bebidas, alimentos calidad, G&C Corp, productos negocio, bebidas peruanas, importación Japón"
        lang="es"
        url="/"
      />
      <StructuredData data={createOrganizationData(siteUrl)} />
      <StructuredData data={createWebsiteData(siteUrl)} />
      <main className="contenedor">
        <article>
          <Sliders></Sliders>
        </article>
        <Smallbanners />
      </main>
    </Layout>
  )
}

export default IndexPage
