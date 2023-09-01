import React from "react"
import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Fitiavana</title>
                <meta
                    name='description'
                    content="Site de l'association Fitiavana Madagascar"
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Navbar />
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout
