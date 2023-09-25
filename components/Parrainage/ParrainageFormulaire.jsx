import FormulairePage from "../Formulaire"
export const ParrainageFormulaire = () => {
    const formulaireParrainageData = {
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

    const parrainageInitialState = {
        nom: '',
        email: '',
        adresse: '',
        parrainageType: formulaireParrainageData.parrainageType.value[0]
    }
    return (
        <section id='comment-parrainer'>
            <h2 className='bg-blue-theme text-white text-4xl h-45vh w-full flex justify-center p-6'>
                Comment Parrainer ?
            </h2>

            <div className='w-10/12 mx-auto my-5 lg:w-8/12 lg:my-[10vh]'>
                <p className="mb-3">
                    Incididunt laborum deserunt eiusmod aliqua consectetur ex
                    elit sunt culpa eiusmod veniam in mollit. Ut ad minim amet
                    sit eiusmod anim cillum dolor eiusmod. Voluptate sunt eu
                    quis enim voluptate cillum irure tempor consectetur. Eiusmod
                    minim in nisi anim labore mollit laborum nulla ex ea
                    exercitation amet laborum labore.
                    Incididunt laborum deserunt eiusmod aliqua consectetur ex
                    elit sunt culpa eiusmod veniam in mollit. Ut ad minim amet
                    sit eiusmod anim cillum dolor eiusmod. Voluptate sunt eu
                    quis enim voluptate cillum irure tempor consectetur. Eiusmod
                    minim in nisi anim labore mollit laborum nulla ex ea
                    exercitation amet laborum labore.
                </p>
                <p className="mb-3">
                    Incididunt laborum deserunt eiusmod aliqua consectetur ex
                    elit sunt culpa eiusmod veniam in mollit. Ut ad minim amet
                    sit eiusmod anim cillum dolor eiusmod. Voluptate sunt eu
                    quis enim voluptate cillum irure tempor consectetur. Eiusmod
                    minim in nisi anim labore mollit laborum nulla ex ea
                    exercitation amet laborum labore.
                    Incididunt laborum deserunt eiusmod aliqua consectetur ex
                    elit sunt culpa eiusmod veniam in mollit. Ut ad minim amet
                    sit eiusmod anim cillum dolor eiusmod. Voluptate sunt eu
                    quis enim voluptate cillum irure tempor consectetur. Eiusmod
                    minim in nisi anim labore mollit laborum nulla ex ea
                    exercitation amet laborum labore.
                </p>
                <p className="mb-3">
                    Incididunt laborum deserunt eiusmod aliqua consectetur ex
                    elit sunt culpa eiusmod veniam in mollit. Ut ad minim amet
                    sit eiusmod anim cillum dolor eiusmod. Voluptate sunt eu
                    quis enim voluptate cillum irure tempor consectetur. Eiusmod
                    minim in nisi anim labore mollit laborum nulla ex ea
                    exercitation amet laborum labore.
                    Incididunt laborum deserunt eiusmod aliqua consectetur ex
                    elit sunt culpa eiusmod veniam in mollit. Ut ad minim amet
                    sit eiusmod anim cillum dolor eiusmod. Voluptate sunt eu
                    quis enim voluptate cillum irure tempor consectetur. Eiusmod
                    minim in nisi anim labore mollit laborum nulla ex ea
                    exercitation amet laborum labore.
                </p>
            </div>
            <div className='w-10/12 mx-auto my-5 lg:w-8/12 lg:my-[10vh]'>
                <h3 className='flex justify-center text-2xl p-5 mt-5'>
                    Formulaire de Parrainage
                </h3>
                <FormulairePage propFormData={formulaireParrainageData} initialState={parrainageInitialState} />
            </div>
        </section>
    )
}
