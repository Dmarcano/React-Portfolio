import { Helmet } from 'react-helmet';
import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/main.scss';

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
