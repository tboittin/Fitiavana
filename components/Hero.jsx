import Image from "next/image"
import React from "react"
import styles from "../styles/Hero.module.scss"

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroImage}>
                <Image
                    src='https://images.unsplash.com/photo-1559719112-32885f14c136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt="Des enfants malgaches de la brousse"
                    layout='fill'
                    objectFit='cover'
                    className={styles.heroBackground}
                />
            </div>
            <h1 className={styles.title}>
                Bienvenue sur le site de Fitiavana Madagascar
            </h1>
        </div>
    )
}
