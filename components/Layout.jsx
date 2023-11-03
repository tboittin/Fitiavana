import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props) => {
    return (
        <div className="min-h-screen flex flex-col text-center md:text-left">
            <Head>
                <title>Fitiavana</title>
                <meta
                    name="description"
                    content="Site de l'association Fitiavana Madagascar"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <div className="flex-grow flex flex-col">{props.children}</div>
            <Footer />
        </div>
    )
}

export default Layout
