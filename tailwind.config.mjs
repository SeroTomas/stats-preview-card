/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"c-darkBlue":"hsl(233, 47%, 7%)",
				"c-desaturatedBlue":"hsl(244, 38%, 16%)",
				"c-softViolet":"hsl(277, 64%, 61%)",
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'lexend': ['Lexend Deca', 'sans-serif']
			}
		},
	},
	plugins: [],
}
