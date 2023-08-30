import React from "react"
import Layout from "../components/Layout"

const LegalMentions = () => {
    return (
        <Layout>
            <div className='container bg-gray-100 mt-[50px]'>
                <h1 className='text-2xl font-semibold mb-4'>
                    Mentions Légales
                </h1>
                <div className='text-base text-gray-700'>
                    <section className='mb-8'>
                        <h2 className='text-xl font-semibold mb-2'>
                            Informations légales
                        </h2>
                        <div className='pl-4'>
                            <h3 className='text-lg font-semibold mb-1'>
                                Identification
                            </h3>
                            <p>Nom de l’association : Fitiavana Madagascar</p>
                            <p>Adresse : [Adresse complète]</p>
                            <p>Téléphone : [Numéro de téléphone]</p>
                            <p>Email : [Adresse email]</p>
                            <p>SIRET : [Numéro de SIRET]</p>
                        </div>
                        <h3 className='text-lg font-semibold mb-1 mt-4'>
                            Responsable de la publication
                        </h3>
                        <p className='pl-4'>[Nom du responsable], [Position]</p>
                        <h3 className='text-lg font-semibold mb-1 mt-4'>
                            Hébergement
                        </h3>
                        <p className='pl-4'>Le site est hébergé par Vercel.</p>
                    </section>
                    <section className='mb-8'>
                        <h2 className='text-xl font-semibold mb-2'>
                            Propriété intellectuelle
                        </h2>
                        <p className='pl-4'>
                            Le contenu de ce site est la propriété de
                            l'association Fitiavana Madagascar et est protégé
                            par la législation en vigueur sur les droits
                            d'auteur. Toute reproduction est interdite sauf
                            autorisation préalable de l'association.
                        </p>
                    </section>
                    <section className='mb-8'>
                        <h2 className='text-xl font-semibold mb-2'>
                            Données personnelles
                        </h2>
                        <p className='pl-4'>
                            L'association s'engage à ne divulguer aucune
                            information personnelle collectée via le site web à
                            des tiers. Vous avez le droit d'accès, de
                            modification, de rectification et de suppression des
                            données qui vous concernent (art. 34 de la loi
                            "Informatique et Libertés").
                        </p>
                    </section>
                    <section className='mb-8'>
                        <h2 className='text-xl font-semibold mb-2'>Cookies</h2>
                        <p className='pl-4'>
                            Ce site utilise des cookies pour améliorer
                            l'expérience utilisateur. En utilisant notre site
                            web, vous acceptez tous les cookies conformément à
                            notre politique de cookies.
                        </p>
                    </section>
                    <section className='mb-8'>
                        <h2 className='text-xl font-semibold mb-2'>
                            Liens externes
                        </h2>
                        <p className='pl-4'>
                            Ce site peut contenir des liens vers d'autres sites
                            web. L'association Fitiavana Madagascar n'est pas
                            responsable du contenu et de la politique de
                            confidentialité de ces sites.
                        </p>
                    </section>
                    <section className='mb-8'>
                        <h2 className='text-xl font-semibold mb-2'>
                            Modifications
                        </h2>
                        <p className='pl-4'>
                            L'association Fitiavana Madagascar se réserve le
                            droit de modifier à tout moment le contenu de cette
                            page. Les présentes mentions légales ont été mises à
                            jour pour la dernière fois le [Date de la dernière
                            mise à jour].
                        </p>
                    </section>
                </div>
            </div>
        </Layout>
    )
}

export default LegalMentions
