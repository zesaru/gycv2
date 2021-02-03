import React from "react"
import Sliders from "./components/slider"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main className="contenedor">
        <article>
          <Sliders></Sliders>
        </article>
        
    </main>
  </Layout>
)

export default IndexPage