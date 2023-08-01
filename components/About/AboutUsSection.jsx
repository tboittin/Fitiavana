import React from "react"
import styles from "../../styles/AboutUs.module.scss"

import Image from 'next/image'

export default function AboutUsSection({content}) {
  console.log(content.photoUrl);
  return (
    <div className={styles.aboutUs}>
      <h1>{content.title}</h1>
      <Image
        src={content.photoUrl} // Chemin relatif à la racine de votre projet public/ directory
        alt={content.photoDescription}
        width={500} // La largeur de l'image
        height={300} // La hauteur de l'image
      />
      <p>
        {content.text}
      </p>
    </div>
  )
}