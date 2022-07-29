import React, { useState } from "react"
// import Image from "next/image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import styles from "../styles/Navbar.module.scss"
import { navbarText } from "../wording/wording"

export default function Navbar() {
    const [displayNavbar, setDisplayNavbar] = useState(false)

    const toggleNavbar = () => {
        setDisplayNavbar(!displayNavbar)
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.navbarLogo}>
                {/* replace img with Image from next */}
                <img
                    src='/images/logo/290538622_1121932522038336_2469259896100467841_n.jpg'
                    alt='fitiavana-logo'
                />
                <span className={styles.navbarLogoTitle}>
                    - Association Fitiavana
                </span>
            </div>
            <div className={styles.mobile}>
                <div className={styles.navbarToggle}>
                    <FontAwesomeIcon icon={faBars} onClick={toggleNavbar} />
                </div>
            </div>
            <div className={styles.desktop}>
                <ul className={styles.navbarLinksContainer}>
                    {navbarText.map(subject => (
                        <a key={subject.title} href={subject.link}>
                            <div className={styles.navbarLink}>
                                {subject.title}
                            </div>
                        </a>
                    ))}
                </ul>
            </div>
            {displayNavbar && (
                <div className={styles.mobileMenu}>
                    {navbarText.map(subject => (
                        <div key={subject.title} className={styles.navbarLink}>
                            {subject.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
