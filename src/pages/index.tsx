import { Helmet } from 'react-helmet';
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import App from "../components/App"

const IndexPage = () => {
  let title = "simple"
  let lang = 'en'
  let description = 'description'

  return(
  <>
    <Helmet>
          <meta charSet="utf-8" />
          <title>{title || 'Gatsby Simplefolio'}</title>
          <html lang={lang || 'en'} />
          <meta name="description" content={description || 'Gatsby Simplefolio'} />
        </Helmet>
    <App />
  </>
 )
}

export default IndexPage
