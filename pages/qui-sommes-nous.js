import "bootstrap/dist/css/bootstrap.min.css"
import VideoSection from "../components/VideoSection"
import AboutUs from "../components/About/AboutUs"
import AboutUsSection from "../components/About/AboutUsSection"
import Layout from "../components/Layout"

const AboutUsContent = {
    Scolarite: {
        title: "Scolarité",
        photoUrl:
            "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        photoDescription: "Des enfants à l'école.",
        text: "Participation aux frais de scolarité - Achat de fourniture - Suivi et soutien scolaire - cours de français",
    },
    Alimentaire: {
        title: "Alimentaire",
        photoUrl:
            "https://images.unsplash.com/photo-1551218372-a8789b81b253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        photoDescription: "Des enfants qui mangent.",
        text: "Cantine Scolaire - Distribution de riz",
    },
    Sante: {
        title: "Santé",
        photoUrl:
            "https://images.unsplash.com/photo-1576766125535-b04e15fd0273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        photoDescription: "Une petite fille se faisant vacciner.",
        text: "Consultation gratuite par le médecin de l'association - fourniture gratuite de médicaments - informations collectives sur la santé et l'hygiène",
    },
}

export default function About() {
    return (
        <Layout>
            <div className='container h-100'>
                <div className='row'>
                    <div className='col'>
                        <VideoSection title='' id='fSphQDq34Sg' />
                    </div>
                    <div className='col d-flex align-items-center '>
                        <div className='container'>
                            <AboutUs />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container h-100'>
                <div className='row'>
                    <div className='col'>
                        <AboutUsSection //Scolarité
                            content={AboutUsContent.Scolarite}
                        />
                    </div>
                    <div className='col '>
                        <AboutUsSection content={AboutUsContent.Alimentaire} />
                    </div>
                </div>
            </div>
            <div className='container h-100'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-6'>
                        <AboutUsSection content={AboutUsContent.Sante} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
