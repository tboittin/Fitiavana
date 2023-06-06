import Image from "next/image"
import React, { useState, useEffect }  from "react"
import styles from "../styles/Hero.module.scss"
import useWindowWidth from '../hooks/useWindowWidth'; 


export default function Hero({ title = ''}) {
    const windowWidth = useWindowWidth();
    const [imageSrc, setImageSrc] = useState('/images/hero/BANNIERE-YT2.png');

    useEffect(() => {
        setImageSrc(windowWidth > 768 ? '/images/hero/BANNIERE-YT2.png' : '/images/hero/BANNIERE-YT.png');
      }, [windowWidth]);

  return (
    <div className={styles.hero} id="hero">
      <div className={styles.heroImage} role="img" aria-label="Des enfants malgaches de la brousse">
        <Image
          src="/images/hero/BANNIERE-YT2.png"
          alt="Des enfants malgaches de la brousse"
          layout="fill"
          objectFit="cover"
          className={`${styles.heroBackground} ${title && styles.darkenImage}`}
        />
      </div>
      {title && (
        <h1 className={styles.heroTitle}>
          {title}
        </h1>
      )}
    </div>
  )
}
