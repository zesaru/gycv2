import React from "react"
import Sliders from "./components/sliders"
import Layout from "../../components/layoutj"
import { Smallbanners } from "../../components/smallbanners"

const IndexPage = () => (

  <Layout>
    <main className="contenedor">
        <article>
          <Sliders></Sliders>
        </article>
      <Smallbanners/>
    </main>
  </Layout>

)

export default IndexPage