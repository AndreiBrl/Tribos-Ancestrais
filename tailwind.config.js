/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				parchment: {
					DEFAULT: "#F2E3D0",
					card: "#F4E2C7",
				},
				tribos: {
					red: "#823535",
					brown: "#581d08",
				},
			},
			fontFamily: {
				sans: ["var(--font-geist-sans)", "sans-serif"],
				mono: ["var(--font-geist-mono)", "monospace"],
				potta: ["var(--font-potta)", "potta", "sans-serif"],
				serif: ["Garamond", "Times New Roman", "Times", "serif"],
			},
			keyframes: {
				apareceHome: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				cresceLivro: {
					"0%": { transform: "scale(1)" },
					"100%": { transform: "scale(1.05)" },
				},
			},
			animation: {
				apareceHome: "apareceHome 1s linear 0.5s forwards",
				apareceHomeSlow: "apareceHome 1s linear 1s forwards",
				cresceLivro: "cresceLivro 0.5s linear infinite alternate",
			},
		},
	},
	plugins: [],
};
