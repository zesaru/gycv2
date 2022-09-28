import React from "react"
import Sliders from "../components/sliders"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Smallbanners} from "../components/smallbanners"
import { Tarjeta} from "../components/tarjeta"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main className="contenedor">
        <article>
          <Sliders></Sliders>
        </article>
        
        <Tarjeta/>
    </main>
  </Layout>
)

export default IndexPage
