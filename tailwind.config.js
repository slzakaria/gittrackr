/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#161925",
				secondary: "#174D64",
				accent: "#A8DADC",
				textColor: "#F1FAEE",
				details: "#F49390",
			},
		},
	},
	plugins: [],
};
