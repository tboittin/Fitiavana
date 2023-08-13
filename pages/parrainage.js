import Head from "next/head"
import Navbar from "../components/Navbar"
import styles from "../styles/Home.module.scss"
import Footer from "../components/Footer"
import VideoSection from "../components/VideoSection"
import FormulairePage from "../components/Formulaire"

export default function Parrainages() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Fitiavana</title>
                <meta
                    name='description'
                    content='Parrainages - Fitiavana Madagascar'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            <div className='mt-5 pt-5 container h-100'>
                <div className='row'>
                    <div className='col'>
                        <VideoSection
                            id='WO7SRf5PCE0'
                            title='Comment Parrainer'
                        />
                    </div>
                </div>
            </div>
            <div className='mb-5 container h-100'>
                <div className='row'>
                    <div className='col'>
                        <FormulairePage />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
