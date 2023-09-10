import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <Head>
                <title>Confiedy - Conecta con tu asesor de confianza</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="ConfiEdy es el mejor aliado para superar tus metas universitarias." />
                <meta name="og:title" property="og:title" content="ConfiEdy es el mejor aliado para superar tus metas universitarias."></meta>
                <meta name="twitter:card" content="Confiedy - Conecta con tu asesor de confianza"></meta>
                <link rel="canonical" href="https://edemy-react.envytheme.com/"></link>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;