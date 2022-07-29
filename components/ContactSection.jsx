import React from "react"
import styles from "../styles/ContactSection.module.scss"

export default function ContactSection() {
    return (
        // TODO enfant avec fond transparent (decoupage du background)
        <div className={styles.contact} id="contact">
            <div className={styles.left}>
                <img
                    src='/images/logo/girl-without-bg.png'
                    alt='smiling-girl'
                />
            </div>
            <div className={styles.right}>
                <h3>
                    Pour toute information complémentaire, laissez-nous un
                    message !
                </h3>
                <h2>fitiavana.madagascar@gmail.com</h2>
            </div>
        </div>
    )
}
