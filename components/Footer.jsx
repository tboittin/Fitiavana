import React from "react"
import PropTypes from "prop-types"
// import styles from "../styles/Footer.module.scss"

const Footer = () => {
    const links = [
        { name: "Accueil", url: "/" },
        { name: "Parrainage", url: "/parrainage" },
        { name: "Contact", url: "/contact" },
        { name: "Mentions Légales", url: "/mentions-legales" },
        // autres liens
    ]

    const socialMedia = [
        { name: "YouTube", url: "https://youtube.com/@AssociationFitiavanaMadagascar?si=TlnIGPIlfNsfOdsu" },
        { name: "Facebook", url: "https://www.facebook.com/parrainages.fitiavana.madagascar" },
        // autres plateformes
    ]
    return (
        <footer className='bg-blue-theme text-white py-4'>
            <div className='grid grid-cols-12'>
                <ul className='container flex justify-between col-start-3 col-end-8 mx-3'>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.url}
                                className='text-sm text-white hover:text-white'
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="col-start-10">|</div>
                <ul className='container flex justify-between col-start-11'>
                    {socialMedia.map((platform, index) => (
                        <li key={index}>
                            <a
                                href={platform.url}
                                className='text-sm text-white hover:text-white'
                            >
                                {platform.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

Footer.propTypes = {
    links: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
    socialMedia: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default Footer
