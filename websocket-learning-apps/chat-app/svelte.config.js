import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x',
			regions: ['iad1'],
			functions: {
				'api/websocket.js': {
					memory: 1024,
					maxDuration: 30
				}
			}
		}),
		alias: {
			$lib: './src/lib',
			$components: './src/lib/components',
			$stores: './src/lib/stores',
			$types: './src/lib/types'
		}
	}
};

export default config;
