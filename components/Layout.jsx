import React from "react"
import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "../styles/Home.module.scss"

const Layout = (props) => {
    return (
        <div className={styles.container}>
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
