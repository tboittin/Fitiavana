import { ParrainageFormulaire } from '../components/Parrainage/ParrainageFormulaire'
import Layout from '../components/Layout'
import ParrainagePresentation from '../components/Parrainage/ParrainagePresentation'

export default function Parrainages() {
    const videoInfos = {
        urlYoutubeLink: 'WO7SRf5PCE0',
        title: 'Comment Parrainer',
    }
    const formulaireParrainage = {
        nom: {
            title: 'nom',
            type: 'text',
            value: '',
        },
        email: {
            title: 'email',
            type: 'email',
            value: '',
        },
        adresse: {
            title: 'adresse',
            type: 'adress',
            value: '',
        },
        parrainageType: {
            title: 'Type de parrainage',
            type: 'select',
            value: ['Parrainage simple', 'Parrainage double'],
        },
    }
    return (
        <Layout>
            <ParrainagePresentation videoInfos={videoInfos} />
            <ParrainageFormulaire
                formulaireParrainageData={formulaireParrainage}
            />
        </Layout>
    )
}
