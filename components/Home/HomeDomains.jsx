import Image from 'next/image'

const HomeDomains = () => {
    const domainesContent = [
        {
            title: 'Scolarité',
            photoUrl:
                'https://static.blog4ever.com/2008/01/171408/artfichier_171408_5458734_201602054409760.jpg',
            photoDescription: "Des enfants à l'école.",
            text: [
                "Tout en n'étant pas une école à proprement parler, nous agissons comme un véritable pilier dans l'éducation des enfants. Non seulement nous prenons en charge les frais de scolarité et fournissons les fournitures indispensables, mais nous leur offrons aussi un environnement sûr et stimulant.",
                "En complément de leur cursus académique, nous mettons l'accent sur leur épanouissement à travers des activités culturelles et socio-éducatives variées : cours de français enrichis, soutien scolaire personnalisé, divers sports, ateliers de dessin, sessions de danse, et bien plus encore.",
                'Ces activités viennent enrichir leur quotidien et sont organisées en dehors des heures de classe et durant les vacances scolaires.',
            ],
        },
        {
            title: 'Alimentaire',
            photoUrl:
                'https://static.blog4ever.com/2008/01/171408/big_artfichier_171408_8530137_20200310153197.jpg',
            photoDescription: 'Des enfants qui mangent.',
            text: [
                "Chez Fitiavana Madagascar, la nutrition n'est pas seulement un besoin de base, c'est un pilier du développement de chaque enfant. C'est pourquoi nous avons instauré une cantine où nos enfants parrainés se rassemblent pour recevoir des repas nutritifs et équilibrés.",
                "Notre engagement va au-delà de notre cantine : grâce à notre initiative d'aide alimentaire mobile, nous étendons notre soutien à nos filleuls éloignés, garantissant ainsi que chaque enfant puisse bénéficier de notre aide, indépendamment de sa localisation.",
            ],
        },
        {
            title: 'Santé',
            photoUrl:
                // 'https://images.unsplash.com/photo-1576766125535-b04e15fd0273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
                '/images/DALLE-Sante.png',
            photoDescription: "Dessin d'un enfant durant une examination médicale.",
            text: [
                'Notre approche de la santé est globale, prenant en compte tant le bien-être physique que mental de nos protégés.',
                "Des consultations gratuites sont proposées, dispensées par des professionnels de la santé qualifiés. Ces services sont accessibles non seulement aux bénéficiaires directs, mais aussi à leurs familles et aux membres du personnel. La collaboration avec nos médecins dévoués permet de réaliser des examens de santé approfondis, contribuant à l'identification et à la prise en charge d'un éventail de problèmes médicaux, des plus mineurs aux plus complexes.",
                "Des ateliers dédiés à la santé sexuelle et à la prévention des comportements à risque sont également proposés, dotant les jeunes des informations essentielles pour adopter un mode de vie sain. L'accent est également mis sur le bien-être psychologique à travers des sessions de soutien individuelles, menées par un spécialiste bénévole en santé mentale, pour aider les jeunes confrontés à des enjeux émotionnels.",
            ],
        },
    ]

    return (
        <section id="domains" className="my-5">
            <h2 className="bg-blue-theme text-white text-2xl flex justify-center p-6 mx-auto md:w-6/12 md:mt-[5vh] lg:my-[10vh]">
                Domaines d&apos;action
            </h2>

            {domainesContent.map((domain, index) => (
                <div key={domain.title}>
                    <div
                        id={domain.title}
                        className={`hidden w-10/12 lg:grid lg:grid-cols-6 items-center mx-auto`}
                    >
                        {' '}
                        {/*lg div */}
                        <div
                            className={`col-span-3 ${
                                index % 2 ? `order-1` : `order-2`
                            } flex flex-col px-6 mt-4`}
                        >
                            <h3 className="hidden lg:flex justify-center text-2xl">
                                {domain.title}
                            </h3>
                            {domain.text.map((text, index) => (
                                <p
                                    key={index}
                                    className="flex justify-center py-2"
                                >
                                    {text}
                                </p>
                            ))}
                        </div>
                        <div
                            className={`col-span-3 ${
                                index % 2 ? `order-2` : `order-1`
                            }`}
                        >
                            <Image
                                src={domain.photoUrl}
                                width={500}
                                height={400}
                                layout="responsive"
                                objectFit="cover"
                                alt="Domaine Alimentation"
                            />
                        </div>
                    </div>
                    <div
                        id={domain.title}
                        className={`lg:hidden w-10/12 grid items-center mx-auto`}
                    >
                        <h3 className="flex justify-center text-2xl p-5 mt-5 lg:hidden">
                            {domain.title}
                        </h3>
                        <div className={`order-3 flex flex-col px-5 mt-4`}>
                            {domain.text.map((text, index) => (
                                <p
                                    key={index}
                                    className="flex justify-center p-2"
                                >
                                    {text}
                                </p>
                            ))}
                        </div>
                        <div className={`order-2`}>
                            <Image
                                src={domain.photoUrl}
                                width={500}
                                height={400}
                                layout="responsive"
                                objectFit="cover"
                                alt="Domaine Alimentation"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default HomeDomains
