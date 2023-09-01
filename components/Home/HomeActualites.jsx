import VideoSection from "../VideoSection"

const HomeActualites = () => {
  return (
    <section id='actualites' className='h-[90vh] my-auto'>
                <h2 className='bg-blue-theme text-white text-4xl h-45vh w-full flex justify-center p-6 my-[10vh]'>
                    Actualités
                </h2>
                <h3 className='text-3xl h-45vh w-full flex justify-center p-6 my-[10vh]'>
                    Bodo, marraine de l&apos;association
                </h3>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <VideoSection
                                title=''
                                id='rOAwDC__vYg'
                                scaling={0.75}
                            />
                        </div>
                        <div className='col-6'>
                            <VideoSection
                                title=''
                                id='RbyB9Qk6PMQ'
                                scaling={0.75}
                            />
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default HomeActualites