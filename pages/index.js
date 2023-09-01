import HomeHero from "../components/Home/HomeHero"
// import TitleSection from "../components/TitleSection"
// import ContactSection from "../components/ContactSection"

import Layout from "../components/Layout"
import HomePresentation from "../components/Home/HomePresentation"
import HomeDomains from "../components/Home/HomeDomains"
import HomeActualites from "../components/Home/HomeActualites"

export default function Home() {

    return (
        <Layout>
            <HomeHero title='' darkenImage={false} />
            <HomePresentation />
            <HomeDomains />
            {/* <HomeActualites /> */}
            {/* <TitleSection /> */}
            {/* <SponsorSection /> */}
            {/* <ContactSection /> */}
            {/* TODO: Page d'accueil */}
        </Layout>
    )
}
