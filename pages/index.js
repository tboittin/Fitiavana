import Hero from "../components/Hero"
import TitleSection from "../components/TitleSection"
import ContactSection from "../components/ContactSection"

import VideoSection from "../components/VideoSection"
import Layout from "../components/Layout"

export default function Home() {
    return (
        <Layout>
            <Hero title='' darkenImage={false} />
            <section
                id='presentation'
                className='w-10/12 grid grid-cols-6 items-center mx-auto'
            >
                <div className='flex col-span-4'>
                    <VideoSection title='' id='fSphQDq34Sg' />
                </div>
                <div className='col-span-2'>
                    <p className='my-4'>
                        Bienvenue sur le site officiel de Fitiavana Madagascar,
                        une association qui a pour mission d&apos;apporter une
                        aide alimentaire aux populations les plus vulnérables de
                        Madagascar, en mettant l&apos;accent sur les besoins des
                        enfants.
                    </p>
                    <p className='my-4'>
                        Notre action passe par des projets éducatifs, des
                        programmes de santé et d&apos;hygiène pour créer un
                        impact durable dans la vie de ceux que nous aidons.
                    </p>
                    <p className='my-4'>
                        Grâce à la générosité et l&apos;engagement de notre
                        communauté de donateurs, bénévoles et partenaires, nous
                        faisons chaque jour un pas de plus vers un avenir
                        meilleur pour tous.
                    </p>
                    <p className='my-4'>
                        Découvrez comment vous pouvez contribuer à faire la
                        différence !
                    </p>
                </div>
            </section>
            <div className='container'>
                <h1>Bodo marraine de l&apos;association</h1>
                <div className='row'>
                    <div className='col-6'>
                        <VideoSection title='' id='rOAwDC__vYg' />
                    </div>
                    <div className='col-6'>
                        <VideoSection title='' id='RbyB9Qk6PMQ' />
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
