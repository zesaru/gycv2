import React from "react"
import { Helmet } from "react-helmet"

const StructuredData = ({ data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  )
}

export default StructuredData

// Funciones helper para generar datos estructurados comunes
export const createOrganizationData = (siteUrl) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "G&C Corporation",
  alternateName: "G&C Corp",
  url: siteUrl,
  logo: `${siteUrl}/images/gyc-logo-social.jpg`,
  description: "Importadora y distribuidora líder de bebidas y alimentos de calidad en Japón",
  foundingDate: "2015",
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressLocality: "Tokyo"
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@gyc-corp.com"
  },
  sameAs: [
    "https://www.facebook.com/gycorporation"
  ]
})

export const createWebsiteData = (siteUrl) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "G&C Corporation",
  url: siteUrl,
  description: "Importadora y distribuidora de bebidas y alimentos de calidad",
  inLanguage: ["es", "ja", "pt"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/productos?search={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
})

export const createBreadcrumbData = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})

export const createProductData = (product, siteUrl) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.image,
  brand: {
    "@type": "Brand",
    name: product.brand
  },
  manufacturer: {
    "@type": "Organization",
    name: "G&C Corporation"
  },
  url: `${siteUrl}/productos/${product.slug}`,
  category: product.category
})

export const createArticleData = (article, siteUrl) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  image: article.image,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  author: {
    "@type": "Organization",
    name: "G&C Corporation"
  },
  publisher: {
    "@type": "Organization",
    name: "G&C Corporation",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/gyc-logo-social.jpg`,
      width: 600,
      height: 60
    }
  },
  url: `${siteUrl}${article.url}`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteUrl}${article.url}`
  }
})