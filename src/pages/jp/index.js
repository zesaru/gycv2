import React from "react"
import Sliders from "../../components/sliders"
import Layout from "../../components/layoutj"
import Seo from "../../components/seo"
import { Smallbanners } from "../../components/smallbanners"

const IndexPage = () => (
  <Layout>
    <Seo 
      title="ホーム - 飲料・食品販売会社" 
      description="G&C Corp - 高品質な飲料・食品の配給会社。あなたのビジネスに最適なブランドと製品を見つけてください。"
      keywords="飲料販売, 食品品質, G&C Corp, ビジネス製品"
      lang="ja"
    />
    <main className="contenedor">
      <article>
        <Sliders></Sliders>
      </article>
      <Smallbanners />
    </main>
  </Layout>
)

export default IndexPage
