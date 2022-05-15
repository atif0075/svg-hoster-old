import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    extract: {
        include: ['**/*.{vue,html,jsx,tsx}'],
        exclude: ['node_modules', '.git'],
    },
    theme: {
        colors: {
            'dark-primary': '#001E26',
            'green': '#00DC82',
            'mud': '#012A35',
            'white-primary': '#FCFCFC',
            'white': '#fff',
        }
        , animation: {
            blob: "blob 7s infinite",
            fade: "fade 1.0s infinite ease-out",
        },
        keyframes: {
            blob: {
                "0%": {
                    transform: "translate(0px, 0px) scale(1)",
                },
                "33%": {
                    transform: "translate(30px, -50px) scale(1.1)",
                },
                "66%": {
                    transform: "translate(-20px, 20px) scale(0.9)",
                },
                "100%": {
                    transform: "tranlate(0px, 0px) scale(1)",
                },
            },
            fade: {
                "0%": {
                    opacity: "0",
                },
                "100%": {
                    opacity: "1",

                },
            },
        },
    },
    shortcuts: {
        "flex-cen": "flex justify-center items-center",
    }
})