import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,svx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#eff6ff',
					100: '#dbeafe',
					200: '#bfdbfe',
					300: '#93c5fd',
					400: '#60a5fa',
					500: '#3b82f6',
					600: '#2563eb',
					700: '#1d4ed8',
					800: '#1e40af',
					900: '#1e3a8a',
					950: '#172554'
				}
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: 'none',
						code: {
							backgroundColor: '#f1f5f9',
							padding: '0.125rem 0.25rem',
							borderRadius: '0.25rem',
							fontWeight: '600'
						},
						'code::before': {
							content: '""'
						},
						'code::after': {
							content: '""'
						}
					}
				}
			}
		}
	},
	plugins: [typography]
};
