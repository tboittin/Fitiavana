import VideoSection from "../VideoSection"

const HomeActualites = () => {
    return (
        <section id='actualites' className="mb-[10vh]">
            <h2 className='bg-blue-theme text-white text-2xl flex justify-center p-6 lg:mt-[10vh]'>
                Actualités
            </h2>
            <h3 className='text-xl flex justify-center p-6 lg:mt-5'>
                Bodo, marraine de l&apos;association
            </h3>
            <div className='lg:w-10/12 lg:grid lg:grid-cols-2 mx-auto'>
                <div className='mb-6 lg:m-6'>
                    <VideoSection className='p-6' title='' id='rOAwDC__vYg' />
                </div>

                <div className='my-5 lg:m-6'>
                <VideoSection className='p-6' title='' id='RbyB9Qk6PMQ' />
                </div>
            </div>
        </section>
    )
}

export default HomeActualites
