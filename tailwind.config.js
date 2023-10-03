/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	plugins: [],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				accent: 'var(--accent)',
				textColor: 'var(--textColor)',
				details: 'var(--details)',
				opposite: 'var(--opposite)',
			},
		}
	}
};
