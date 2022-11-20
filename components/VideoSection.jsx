import React from "react"
import styles from "../styles/VideoSection.module.scss"
import YoutubeEmbed from "./subComponents/YoutubeEmbed"

export default function VideoSection({title='Video',id='RbyB9Qk6PMQ'}) {
  return (
    <div className={styles.video} id="video">
      <h2 className={styles.videoTitle}>{title}</h2>
      <div className={styles.videoFrame}>
        <YoutubeEmbed embedId={id} />
      </div>
    </div>
  )
}
