import { Helmet } from 'react-helmet';
import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/main.scss';

import App from "../components/App"

const IndexPage = () => {

  return(
  <>
    <Helmet>
          <meta charSet="utf-8" />
          <title>{ "Diego's Portfolio"}</title>
          <html lang={'en'} />
          <meta name="description" content={'My Portfolio'} />
      </Helmet>
    <App />
  </>
 )
}

export default IndexPage
