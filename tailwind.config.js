/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            backgroundImage: {
                hero: "url('/images/hero/BANNIERE-YT2.png')",
            },
            colors: {
                "blue-theme": "#236086",
                "white-theme": "#FFFFFF",
                "green-theme": "#137F41",
            },
            spacing: {
                "navbar-height": "10vh",
                "hero-height": "35vh",
                "hero-height-lg": "90vh",
            },
        },
    },
    plugins: [],
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
}
