import React from "react"
import VideoSection from "../../components/VideoSection"

const HomePresentation = () => {
    return (
        <section id='presentation' className='lg:h-[90vh] my-auto'>
            <h2 className='text-lg h-45vh w-full flex justify-center p-6 my-[10vh] lg:text-4xl '>
                Présentation de l&apos;association
            </h2>
            <div className='lg:w-10/12 lg:grid lg:grid-cols-6 items-center mx-auto'>
                <div className='flex col-span-4'>
                    <VideoSection title='' id='fSphQDq34Sg' />
                </div>
                <div className='col-span-2 text-lg'>
                    <p className='my-4'>
                        Bienvenue sur le site de Fitiavana Madagascar, une
                        association qui a pour mission d&apos;apporter une aide
                        alimentaire aux populations les plus vulnérables de
                        Madagascar, en mettant l&apos;accent sur les besoins des
                        enfants.
                    </p>
                    <p className='my-4'>
                        Notre action passe également par des projets éducatifs,
                        des programmes de santé et d&apos;hygiène pour créer un
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
            </div>
        </section>
    )
}

export default HomePresentation
