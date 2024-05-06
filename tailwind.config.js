/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			backgroundImage: {
				greengd1: "linear-gradient(to right, #165f59, #46d3c7)",
				fondito2: "linear-gradient(0deg,#1f2026 85.44%,rgba(26,25,29,0) 100%)",
				bgbody: "url('/images/bgmain.avif')",
			},
			colors: {
				nuevoWhite: "#efefef",
				otroFondo: "#1f2026",
				green1: "#46d3c7",
			},
			fontFamily: {
				marca: ["Kdam Thmor Pro"],
				habil: ["Barlow Condensed"],
				fontNav: ["Righteous"],
				oswald: ["Oswald"],
				fireCode: ["Fira Code"],
				roboto: ["Roboto"],
				jersey10: ["Jersey 10"],
			},
		},
		
	},
	plugins: [],
};
