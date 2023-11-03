import VideoSection from '../VideoSection'

const HomeActualites = () => {
    return (
        <section id="actualites" className="mb-[10vh]">
            <h2 className="bg-blue-theme text-white text-2xl flex justify-center p-6 lg:mt-[10vh] lg:w-6/12 lg:mx-auto">
                Bodo, marraine de l&apos;association
            </h2>

            <div className='flex justify-center my-[5vh]'>
                <p className="my-2 text-center w-6/12">
                    Bodoharisoa Razafindrazaka, mieux connue sous le pseudonyme
                    de Bodo; elle est un véritable icône de la musique malgache.
                    Son parcours illustre parfaitement la passion et
                    l&apos;engagement, des valeurs qu&apos;elle apporte, en tant
                    que marraine de l&apos;association, à notre mission de
                    changer des vies à Madagascar.
                </p>
            </div>

            <div className="lg:w-10/12 lg:grid lg:grid-cols-2 mx-auto">
                <div className="mb-6 lg:m-6">
                    <VideoSection className="p-6" title="" id="RWDgCY_YeKw" />
                </div>

                <div className="my-5 lg:m-6">
                    <VideoSection className="p-6" title="" id="Ur3gE2F80cM" />
                </div>
            </div>
        </section>
    )
}

export default HomeActualites
