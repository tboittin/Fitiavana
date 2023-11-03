import VideoSection from '../../components/VideoSection'

const HomePresentation = () => {
    return (
        <section id="presentation">
            <h2 className="bg-blue-theme text-white text-4xl h-45vh w-full flex justify-center p-6">
                Présentation de l&apos;association
            </h2>
            <div className="items-center w-10/12 lg:grid lg:grid-cols-6 mx-auto lg:my-[10vh]">
                <div className="w-full mt-5 lg:col-span-3 lg:m-0">
                    <VideoSection title="" id="fSphQDq34Sg" />
                </div>
                <div className="text-sm p-5 md:text-base lg:col-span-3 lg:pl-6">
                    <p className="my-4">
                        <span className="italic">Tonga soa</span> sur le site de
                        Fitiavana Madagascar, une association qui a pour mission
                        d&apos;apporter une aide aux populations les plus
                        vulnérables de Madagascar, en mettant l&apos;accent sur
                        les besoins des enfants.
                    </p>
                    <p className="my-4">
                        Nous fournissons une aide alimentaire ciblée, en
                        particulier pour les plus jeunes. Nous avons notre
                        propre cantine à Tamatave où les enfants parrainés
                        reçoivent des repas, et nous étendons cette aide aux
                        ceux qui sont plus éloignés. Notre engagement va au-delà
                        du domaine de la nutrition : nous mettons en place des
                        initiatives éducatives et des actions autour de la santé
                        pour encourager un développement complet et durable pour
                        les jeunes que nous accompagnons.
                    </p>
                    <p className="my-4">
                        Grâce à la générosité et l&apos;engagement de notre
                        communauté de donateurs, bénévoles et partenaires, nous
                        faisons chaque jour un pas de plus vers un avenir
                        meilleur pour tous.
                    </p>
                    <p className="my-4">
                        Découvrez comment vous pouvez contribuer à faire la
                        différence !
                    </p>
                </div>
            </div>

            <div className="items-center flex flex-col justify-center w-8/12 mx-auto border-2 border-blue-300 p-6 rounded">
                <h2 className="text-blue-theme text-4xl h-45vh w-full flex justify-center p-6">
                    Notre particularité
                </h2>

                <p className="my-2 text-center">
                    Ce qui nous rend uniques, c&apos;est notre vision du
                    parrainage.
                </p>

                <p className="my-2 text-center">
                    Etant une association à taille humaine, nous proposons de
                    mettre en relation epistolaire les enfant avec leurs
                    parrains et marraines. C&apos;est une belle manière de
                    dépasser le simple soutien financier. Ce n&apos;est plus
                    simplement un don, c&apos;est un échange enrichissant. Il
                    s&apos;agit d&apos;un lien qui apporte une gratification
                    personnelle profonde au parrainant, tout en offrant une
                    opportunité d&apos;apprentissage culturel et émotionnel
                    inestimable. De son côté, le ou la filleul(e) a
                    l&apos;occasion d&apos;échanger au sein d&apos;une relation
                    pleine de bienveillance.
                </p>

                <p className="my-2 text-center">
                    Un lien au-delà des
                    frontières
                </p>
            </div>
        </section>
    )
}

export default HomePresentation
