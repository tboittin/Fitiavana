import "bootstrap/dist/css/bootstrap.min.css"
import Hero from "../components/Hero"
import TitleSection from "../components/TitleSection"
import ContactSection from "../components/ContactSection"

import VideoSection from "../components/VideoSection"
import Layout from "../components/Layout"

export default function Home() {
    return (
            <Layout>
                <Hero title='' darkenImage={false} />
                <VideoSection title='' id='fSphQDq34Sg' />
                <div className='container'>
                    <h1>Bodo marraine de l&apos;association</h1>
                    <div className='row'>
                        <div className='col-6'>
                            <VideoSection
                                title='Video Bodo FR'
                                id='rOAwDC__vYg'
                            />
                        </div>
                        <div className='col-6'>
                            <VideoSection
                                title='Video Bodo MG'
                                id='RbyB9Qk6PMQ'
                            />
                        </div>
                    </div>
                </div>
                <TitleSection />
                {/* <SponsorSection /> */}
                <ContactSection />
                {/* TODO: Page d'accueil */}
            </Layout>
    )
}
