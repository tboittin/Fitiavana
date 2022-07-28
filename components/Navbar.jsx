import React, { useState } from "react"

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
            <div className={styles.navbarLogo}>Fitiavana</div>
            <div className={styles.mobile}>
                <div className={styles.navbarToggle}>
                    <FontAwesomeIcon icon={faBars} onClick={toggleNavbar} />
                </div>
            </div>
            <div className={styles.desktop}>
                <ul className={styles.navbarLinksContainer}>
                    {navbarText.map(subject => (
                        <div key={subject.title} className={styles.navbarLink}>
                            {subject.title}
                        </div>
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
