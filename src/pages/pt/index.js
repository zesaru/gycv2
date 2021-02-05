import React from "react"
import Sliders from "./components/slider"
import Layout from "../../components/layoutp"
import SEO from "../../components/seo"
import { Smallbanners } from "../../components/smallbanners"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main className="contenedor">
        <article>
          <Sliders></Sliders>
        </article>
      <Smallbanners></Smallbanners>    
    </main>
  </Layout>
)

export default IndexPage