import Image from "next/image"

const HomeDomains = () => {
    const domainesContent = [
        {
            title: "Scolarité",
            photoUrl:
                "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            photoDescription: "Des enfants à l'école.",
            text: [
                "Incididunt laborum deserunt eiusmod aliqua consectetur ex elit sunt culpa eiusmod veniam in mollit. Ut ad minim amet sit eiusmod anim cillum dolor eiusmod. Voluptate sunt eu quis enim voluptate cillum irure tempor consectetur. Eiusmod minim in nisi anim labore mollit laborum nulla ex ea exercitation amet laborum labore.",
                "Incididunt laborum deserunt eiusmod aliqua consectetur ex elit sunt culpa eiusmod veniam in mollit. Ut ad minim amet sit eiusmod anim cillum dolor eiusmod. Voluptate sunt eu quis enim voluptate cillum irure tempor consectetur. Eiusmod minim in nisi anim labore mollit laborum nulla ex ea exercitation amet laborum labore.",
            ],
        },
        {
            title: "Alimentaire",
            photoUrl:
                "https://images.unsplash.com/photo-1551218372-a8789b81b253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            photoDescription: "Des enfants qui mangent.",
            text: [
                "Incididunt laborum deserunt eiusmod aliqua consectetur ex elit sunt culpa eiusmod veniam in mollit. Ut ad minim amet sit eiusmod anim cillum dolor eiusmod. Voluptate sunt eu quis enim voluptate cillum irure tempor consectetur. Eiusmod minim in nisi anim labore mollit laborum nulla ex ea exercitation amet laborum labore.",
                "Incididunt laborum deserunt eiusmod aliqua consectetur ex elit sunt culpa eiusmod veniam in mollit. Ut ad minim amet sit eiusmod anim cillum dolor eiusmod. Voluptate sunt eu quis enim voluptate cillum irure tempor consectetur. Eiusmod minim in nisi anim labore mollit laborum nulla ex ea exercitation amet laborum labore.",
            ],
        },
        {
            title: "Santé",
            photoUrl:
                "https://images.unsplash.com/photo-1576766125535-b04e15fd0273?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
            photoDescription: "Une petite fille se faisant vacciner.",
            text: [
                "Incididunt laborum deserunt eiusmod aliqua consectetur ex elit sunt culpa eiusmod veniam in mollit. Ut ad minim amet sit eiusmod anim cillum dolor eiusmod. Voluptate sunt eu quis enim voluptate cillum irure tempor consectetur. Eiusmod minim in nisi anim labore mollit laborum nulla ex ea exercitation amet laborum labore.",
                "Incididunt laborum deserunt eiusmod aliqua consectetur ex elit sunt culpa eiusmod veniam in mollit. Ut ad minim amet sit eiusmod anim cillum dolor eiusmod. Voluptate sunt eu quis enim voluptate cillum irure tempor consectetur. Eiusmod minim in nisi anim labore mollit laborum nulla ex ea exercitation amet laborum labore.",
            ],
        },
    ]

    return (
        <section id='domains' className='my-5'>
            <h2 className='bg-blue-theme text-white text-4xl h-45vh w-full flex justify-center p-6 lg:my-[10vh]'>
                Domaines d&apos;action
            </h2>

            {domainesContent.map((domain, index) => (
                <>
                <div
                    id={domain.title}
                    key={domain.title}
                    className={`hidden w-10/12 lg:grid lg:grid-cols-6 items-center mx-auto`}
                > {/*lg div */}
                    <div
                        className={`col-span-3 ${
                            index % 2 ? `order-1` : `order-2`
                        } flex flex-col px-5 mt-4`}
                    >
                        <h3 className='hidden lg:flex justify-center text-2xl'>{domain.title}</h3>
                        {domain.text.map((text, index) => (
                            <p key={index} className='flex justify-center p-2'>
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
                            layout='responsive'
                            objectFit='cover'
                            alt='Domaine Alimentation'
                        />
                    </div>
                </div>
                <div
                    id={domain.title}
                    key={domain.title}
                    className={`lg:hidden w-10/12 grid items-center mx-auto`}
                >
                    <h3 className='flex justify-center text-2xl p-5 mt-5 lg:hidden'>{domain.title}</h3>
                    <div
                        className={`order-3 flex flex-col px-5 mt-4`}
                    >
                        {domain.text.map((text, index) => (
                            <p key={index} className='flex justify-center p-2'>
                                {text}
                            </p>
                        ))}
                    </div>
                    <div
                        className={`order-2`}
                    >
                        <Image
                            src={domain.photoUrl}
                            width={500}
                            height={400}
                            layout='responsive'
                            objectFit='cover'
                            alt='Domaine Alimentation'
                        />
                    </div>
                </div>
                </>
            ))}
        </section>
    )
}

export default HomeDomains
