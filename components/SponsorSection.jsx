import Image from "next/image"
import React from "react"
import styles from "../styles/SponsorSection.module.scss"

export default function SponsorSection() {
    return (
        <div className={styles.sponsor} id="sponsor">
            <div className={styles.sponsorImage}>
                <Image
                    src='https://images.unsplash.com/photo-1628251798128-266e012ef8e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                    alt='une famille traversant un fleuve en pirogue'
                    layout='fill'
                    objectFit='cover'
                    className={styles.sponsorBackground}
                />
            </div>
            <div className={styles.sponsorTextBlock}>
                <h3>Parrainer un enfant</h3>
            </div>
        </div>
    )
}
