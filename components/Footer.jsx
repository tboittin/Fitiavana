import Image from "next/image"
const Footer = () => {
    const links = [
        { name: "Accueil", url: "/" },
        { name: "Parrainage", url: "/parrainage" },
        { name: "Contact", url: "/contact" },
        { name: "Mentions Légales", url: "/mentions-legales" },
        // autres liens
    ]

    const socialMedia = [
        {
            name: "YouTube",
            url: "https://youtube.com/@AssociationFitiavanaMadagascar?si=TlnIGPIlfNsfOdsu",
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/parrainages.fitiavana.madagascar",
        },
        // autres plateformes
    ]
    return (
        <div>
            <footer className='bg-blue-theme text-white text-left p-4 pl-0 grid grid-cols-2 items-center lg:hidden'>
                <div className="pl-5">
                    <ul className='container flex flex-col px-3 lg:justify-between lg:col-start-3 lg:col-end-8  lg:flex-row'>
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
                    <div className='hidden lg:block lg:col-start-9'>|</div>
                    <ul className='container flex flex-col px-3 lg:justify-between lg:col-start-10 lg:col-end-12 lg:flex-row'>
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
                <div>
                    <Image
                        src='/images/logo/290538622_1121932522038336_2469259896100467841_n.jpg'
                        width={1200}
                        height={400}
                        layout='responsive'
                        objectFit="contain"
                        alt='logo Fitiavana Madagascar'
                    />
                </div>
            </footer>
            <footer className='bg-blue-theme text-white py-4 hidden lg:block'>
                <div className='lg:grid lg:grid-cols-12'>
                    <ul className='container flex flex-col px-3 lg:justify-between lg:col-start-3 lg:col-end-8  lg:flex-row'>
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
                    <div className='hidden lg:block lg:col-start-9'>|</div>
                    <ul className='container flex flex-col px-3 lg:justify-between lg:col-start-10 lg:col-end-12 lg:flex-row'>
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
        </div>
    )
}

export default Footer
