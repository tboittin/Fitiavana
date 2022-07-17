import Head from "next/head"
import Image from "next/image"
import NavbarLayout from "../components/Navbar"
import styles from "../styles/Home.module.css"

import "bootstrap/dist/css/bootstrap.min.css"
import Hero from "../components/Hero"

export default function Home() {
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

            <NavbarLayout expand={false} />
            <Hero />
            {/* TODO: Page d'accueil */}
            {/* TODO: Layout generale */}


            <footer className={styles.footer}></footer>
        </div>
    )
}
