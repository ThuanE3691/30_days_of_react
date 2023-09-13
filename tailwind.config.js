/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				sub: "#ABB3C1",
			},
			fontFamily: {
				inter: "Inter",
			},
		},
	},
	plugins: [],
};
