import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "gold-muted": "#C5A059",
                "black-matte": "#121212",
                diamond: {
                    black: "#000000",
                    white: "#FFFFFF",
                    silver: "#C0C0C0",
                    platinum: "#E5E4E2",
                    ice: "#E0F2FE",
                    charcoal: "#1A1A1A",
                    metallic: "#B4B4B4",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "diamond-gradient": "linear-gradient(135deg, #000000 0%, #1A1A1A 100%)",
                "glass-shine": "linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 70%)",
            },
            fontFamily: {
                serif: ['var(--font-playfair)', 'serif'],
                sans: ['var(--font-inter)', 'sans-serif'],
            },
            animation: {
                "shimmer": "shimmer 3s infinite linear",
            },
            keyframes: {
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
