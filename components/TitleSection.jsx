import React from "react"
import styles from "../styles/TitleSection.module.scss"

export default function TitleSection() {
    return (
        <div className={styles.title} id="title">
            <img
                src='/images/logo/290538622_1121932522038336_2469259896100467841_n.jpg'
                alt='fitiavana-logo'
            />
            <h3>
                Notre organisme intervient sur l'aide alimentaire des
                populations défavorisées de Madagascar
            </h3>
        </div>
    )
}
