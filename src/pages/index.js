import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout-old"
import Seo from "../components/seo"

const HomePage = () => (
  <Layout>
    <h1>Bienvenue sur le site</h1>
    <StaticImage
        src="../images/image_accueil.jpeg"
        loading="eager"
        width={650}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    <h2>Les calepins de CH</h2>
    <p> Ce site est régulièrement mis à jour et actualisé.</p>
    <p> Vous y trouverez un ensemble de ressources au fil du temps concernant les domaines de formation suivants :
        <ul>
            <li> l'optique</li>
            <li> les sciences</li>
            <li> les mathématiques</li>
            <li> le numérique</li>
        </ul>
        Toutes ces ressources sont à votre disposition qui que vous soyez.
    </p>


  </Layout>
)

export const Head = () => <Seo title="Home" />

export default HomePage
