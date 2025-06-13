import React from "react"
import Layout from "../../components/layoutp"
import { StaticImage } from "gatsby-plugin-image"

const ganadores = () => {
  return (
    <Layout>
      <main className="flex flex-col items-center px-4 py-2">
        <StaticImage
          src="https://res.cloudinary.com/dte3nollo/image/upload/v1740912776/web/2025/ganadores/zwhynyzvhq7uflyahftl.jpg"
          alt="Ganadores 2025"
          className="block mx-auto"
        />
        <div className="my-2 lg:my-8">
          <StaticImage
            src="https://res.cloudinary.com/dte3nollo/image/upload/v1740914374/web/2025/ganadores/lista/w3emzweujnfchi6fhllf.jpg"
            alt="Ganadores 2025"
            className="block mx-auto py-4"
          />
        </div>
        <div className="my-2 lg:my-8">
          <StaticImage
            src="https://res.cloudinary.com/dte3nollo/image/upload/v1740914375/web/2025/ganadores/lista/jeevlun81vhfvlrt1fgx.jpg"
            alt="Ganadores 2025"
            className="block mx-auto py-4"
          />
        </div>
        <div className="my-2 lg:my-8">
          <StaticImage
            src="https://res.cloudinary.com/dte3nollo/image/upload/v1740914375/web/2025/ganadores/lista/mowodtngwqgpaxwyeblg.jpg"
            alt="Ganadores 2025"
            className="block mx-auto py-4"
          />
        </div>        
      </main>
    </Layout>
  )
}

export default ganadores
