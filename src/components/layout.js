import * as React from 'react'
import { Link } from 'gatsby'
import App from '../components/App'
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.module.css"
import { container, navcolonne } from "./layout.module.css"


const Layout = ({ children}) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `)

  return (
    <>
    <Header />
    <div className={container}>
        <div className={navcolonne}>
            <App/>
        </div>
        
      <div>
        {children}
      </div>
    </div>
    </>
  )
}

export default Layout