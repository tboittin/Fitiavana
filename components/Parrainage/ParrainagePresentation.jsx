import VideoSection from "../../components/VideoSection"

const ParrainagePresentation = ({ videoInfos }) => {
    return (
        <section id='pourquoi-parrainer'>
            <h2 className='bg-blue-theme text-white text-4xl h-45vh w-full flex justify-center p-6'>
                Pourquoi Parrainer ?
            </h2>
            <div className='items-center mx-auto'>
                <div>
                    <VideoSection title='' id={videoInfos.urlYoutubeLink} />
                </div>
            </div>
        </section>
    )
}

export default ParrainagePresentation
