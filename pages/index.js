import Head from "next/head"
import NavbarLayout from "../components/Navbar"
import styles from "../styles/Home.module.css"

import "bootstrap/dist/css/bootstrap.min.css"
import Hero from "../components/Hero"
import TitleSection from "../components/TitleSection"
import SponsorSection from "../components/SponsorSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

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
            <TitleSection />
            <SponsorSection />
            <ContactSection />
            {/* TODO: Page d'accueil */}
            {/* TODO: Layout generale */}

                <Footer/>
            <footer>
            </footer>
        </div>
    )
}
