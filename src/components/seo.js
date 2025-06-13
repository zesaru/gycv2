/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, keywords, image, url, article }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = keywords || site.siteMetadata.keywords
  const metaImage = image || `${site.siteMetadata.siteUrl}/images/gyc-logo-social.jpg`
  const metaUrl = url || site.siteMetadata.siteUrl
  const canonical = url ? `${site.siteMetadata.siteUrl}${url}` : site.siteMetadata.siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          rel: `canonical`,
          href: canonical,
        },
        {
          rel: `alternate`,
          hreflang: `es`,
          href: `${site.siteMetadata.siteUrl}${url || '/'}`,
        },
        {
          rel: `alternate`,
          hreflang: `ja`,
          href: `${site.siteMetadata.siteUrl}/jp${url || '/'}`,
        },
        {
          rel: `alternate`,
          hreflang: `pt`,
          href: `${site.siteMetadata.siteUrl}/pt${url || '/'}`,
        },
        {
          rel: `alternate`,
          hreflang: `x-default`,
          href: `${site.siteMetadata.siteUrl}${url || '/'}`,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          name: `robots`,
          content: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`,
        },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1, shrink-to-fit=no`,
        },
        {
          name: `format-detection`,
          content: `telephone=no`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: article ? `article` : `website`,
        },
        {
          property: `og:url`,
          content: canonical,
        },
        {
          property: `og:site_name`,
          content: site.siteMetadata.title,
        },
        {
          property: `og:locale`,
          content: lang === 'es' ? 'es_ES' : lang === 'ja' ? 'ja_JP' : lang === 'pt' ? 'pt_BR' : 'es_ES',
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          property: `og:image:height`,
          content: `630`,
        },
        {
          property: `og:image:type`,
          content: `image/jpeg`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          name: `generator`,
          content: `Gatsby`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
  keywords: ``,
  image: null,
  url: null,
  article: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  article: PropTypes.bool,
}

export default SEO
