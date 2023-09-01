import YoutubeEmbed from "./subComponents/YoutubeEmbed"

export default function VideoSection({
    title = "Video",
    id = "RbyB9Qk6PMQ",
    scaling = 1,
}) {
    return (
        <div
            className='bg-white max-w-full overflow-hidden flex flex-col justify-center items-center text-center'
        >
            <h2>{title}</h2>
            <div  className="relative w-full h-0 pb-[56.25%]">
                <YoutubeEmbed embedId={id} scaling={scaling}/>
            </div>
        </div>
    )
}
