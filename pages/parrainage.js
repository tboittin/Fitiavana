import { ParrainageFormulaire } from '../components/Parrainage/ParrainageFormulaire'
import Layout from '../components/Layout'
import ParrainagePresentation from '../components/Parrainage/ParrainagePresentation'

export default function Parrainages() {
    return (
        <Layout>
            <ParrainagePresentation />
            <ParrainageFormulaire />
        </Layout>
    )
}
