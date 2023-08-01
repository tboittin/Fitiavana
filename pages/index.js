import Head from "next/head"
import Navbar from "../components/Navbar"
import styles from "../styles/Home.module.scss"

import "bootstrap/dist/css/bootstrap.min.css"
import Hero from "../components/Hero"
import TitleSection from "../components/TitleSection"
import SponsorSection from "../components/SponsorSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import VideoSection from "../components/VideoSection"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fitiavana</title>
        <meta
          name="description"
          content="Site de l'association Fitiavana Madagascar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero title="" darkenImage={false} />
      <VideoSection title="" id="fSphQDq34Sg" />
      <div className="container">
        <h1>Bodo marraine de l'association</h1>
        <div className="row">
          <div className="col-6">
            <VideoSection title="Video Bodo FR" id="rOAwDC__vYg" />
          </div>
          <div className="col-6">
            <VideoSection title="Video Bodo MG" id="RbyB9Qk6PMQ" />
          </div>
        </div>
      </div>
      <TitleSection />
      {/* <SponsorSection /> */}
      <ContactSection />
      {/* TODO: Page d'accueil */}
      {/* TODO: Layout generale */}

      <Footer />
    </div>
  )
}
