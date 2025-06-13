require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `G&C Corp`,
    description: `G&C Corp - Importadora y distribuidora líder de bebidas y alimentos de calidad en Japón. Encuentra las mejores marcas peruanas y productos premium para tu negocio.`,
    author: `@gycorporation`,
    siteUrl: `https://gyc-corp.com`,
    keywords: `bebidas peruanas, alimentos importados, distribuidora Japón, G&C Corp, productos de calidad, cerveza peruana, Cusqueña, Pilsen, Cristal, importación alimentos`,
    image: `/images/gyc-logo-social.jpg`,
    twitterUsername: `@gycorporation`,
    lang: `es`,
  },
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    "gatsby-plugin-postcss",

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `G&C Corporation - Importadora y Distribuidora`,
        short_name: `G&C Corp`,
        description: `Importadora y distribuidora líder de bebidas y alimentos de calidad en Japón`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00479a`,
        display: `standalone`,
        icon: `src/images/gyc_logo.jpeg`,
        include_favicon: true,
        cache_busting_mode: `query`,
        crossOrigin: `use-credentials`,
        lang: `es`,
        categories: [`business`, `food`, `beverage`],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/404/`, `/404.html`, `/dev-404-page/`],
        createLinkInHead: true,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            const url = site.siteMetadata.siteUrl + edge.node.path
            const isJapanese = edge.node.path.startsWith('/jp/')
            const isPortuguese = edge.node.path.startsWith('/pt/')
            const lang = isJapanese ? 'ja' : isPortuguese ? 'pt' : 'es'
            
            return {
              url,
              changefreq: edge.node.path === '/' ? 'daily' : 'weekly',
              priority: edge.node.path === '/' ? 1.0 : 0.8,
              links: [
                { lang: 'es', url: site.siteMetadata.siteUrl + edge.node.path.replace(/^\/(jp|pt)/, '') },
                { lang: 'ja', url: site.siteMetadata.siteUrl + '/jp' + edge.node.path.replace(/^\/(jp|pt)/, '') },
                { lang: 'pt', url: site.siteMetadata.siteUrl + '/pt' + edge.node.path.replace(/^\/(jp|pt)/, '') },
              ]
            }
          })
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://gyc-corp.com`,
        sitemap: `https://gyc-corp.com/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/empresa/`, `/contacto/`],
        workboxConfig: {
          globPatterns: ['**/*'],
          runtimeCaching: [
            {
              urlPattern: /(\.js$|\.css$|static\/)/,
              handler: `CacheFirst`,
            },
            {
              urlPattern: /^https?:.*\/page-data\/.*\.json/,
              handler: `StaleWhileRevalidate`,
            },
            {
              urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: `StaleWhileRevalidate`,
            },
            {
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: `StaleWhileRevalidate`,
            },
          ],
        },
      },
    },
  ],
}