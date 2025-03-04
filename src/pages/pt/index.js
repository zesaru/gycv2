import React from "react"
import Sliders from "../../components/sliders"
import Layout from "../../components/layoutp"
import Seo from "../../components/seo"
import { Smallbanners } from "../../components/smallbanners"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <main className="contenedor">
        <article>
          <Sliders></Sliders>
        </article>
      <Smallbanners></Smallbanners>    
    </main>
  </Layout>
)

export default IndexPage