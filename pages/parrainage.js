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
            required: true,
        },
        email: {
            title: 'email',
            type: 'email',
            value: '',
            required: true,
        },
        adresse: {
            title: 'adresse',
            type: 'adress',
            value: '',
            required: true,
        },
        parrainageType: {
            title: 'Type de parrainage',
            type: 'select',
            required: true,
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
