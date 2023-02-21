import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const ganadores = () => {
  return (
    <Layout>
      <main className="contenedor">
        <div className="bg-white text-center">
          <StaticImage
            src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/332045931_1249071879032196_7652625955334504746_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lC9DqdpcCkYAX_aO0w1&_nc_ht=scontent-nrt1-1.xx&oh=00_AfD8C5PzHNb7nvsWCVmh1O4tKuFzBKUdXZz2uakrrvkMcA&oe=63F8BEB2"
            alt="ganadores"
          />
          <StaticImage
            src="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/331889384_880323119752188_3515669054335358693_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=EF5ZypjxoDEAX_L73Jc&_nc_ht=scontent-nrt1-1.xx&oh=00_AfDCQerKzWvE2szElb9BqaDurRxFg0TyJRmYiu66RTX6sA&oe=63F754F1"
            alt="ganadores"
          />
        </div>
      </main>
    </Layout>
  )
}

export default ganadores
