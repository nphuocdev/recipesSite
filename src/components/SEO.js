import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'



export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`


const SEO = ({title,description}) => {
  const {site}= useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description
   
  return (
    <Helmet htmlAttributes={{lang:"en"}}
    title={`${title} | ${site.siteMetadata.title}`} 
    meta={[{name:`description`,content:description
    }]}>

    </Helmet>
  )
}

export default SEO