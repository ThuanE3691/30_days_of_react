/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				sub: "#ABB3C1",
				main__bg: "#D6D9E0",
			},
			fontFamily: {
				inter: "Inter",
				lato: "Lato",
			},
		},
	},
	plugins: [],
};
