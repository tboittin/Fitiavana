import React from "react"
import styles from "../../styles/AboutUs.module.scss"

export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <h1>Qui sommes nous ?</h1>
      <p>
        Notre organisme a pour but d&apos;intervenir en priorité sur l&apos;aide
        alimentaire de populations défavorisées de Madagascar, principalement au
        niveau des enfants. Nous menons également diverses actions dans les
        domaines de l&apos;éducation, de la santé et de l&apos;hygiène.
      </p>
    </div>
  )
}
