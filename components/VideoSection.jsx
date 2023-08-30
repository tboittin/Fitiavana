import React from "react"
import styles from "../styles/VideoSection.module.scss"
import YoutubeEmbed from "./subComponents/YoutubeEmbed"

export default function VideoSection({
    title = "Video",
    id = "RbyB9Qk6PMQ",
    scaling = 1,
}) {
    return (
        <div
            className='bg-white relative z-10 max-w-full overflow-hidden flex flex-col justify-center items-center text-center'
            // className={styles.video} id="video"
        >
            <h2 className={styles.videoTitle}>{title}</h2>
            <div className={styles.videoFrame}>
                <YoutubeEmbed embedId={id} scaling={scaling}/>
            </div>
        </div>
    )
}
