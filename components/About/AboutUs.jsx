import React from "react"
import styles from "../../styles/AboutUs.module.scss"

export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <h1>Qui sommes nous ?</h1>
      <p>
        Notre organisme a pour but d'intervenir en priorité sur l'aide
        alimentaire de populations défavorisées de Madagascar, principalement au
        niveau des enfants. Nous menons également diverses actions dans les
        domaines de l'éducation, de la santé et de l'hygiène.
      </p>
    </div>
  )
}
