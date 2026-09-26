// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://sturdy5.github.io',
	base: '/sturdy-base',
	integrations: [
		starlight({
			title: 'Sturdy Base',
			logo: {
				src: './src/assets/logo.svg',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/sturdy5/sturdy-base',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/sturdy5/sturdy-base/edit/main/',
			},
			sidebar: [
				{
					label: 'IT & Infrastructure',
					items: [{ autogenerate: { directory: 'it' } }],
				},
				{
					label: 'Application Development',
					items: [{ autogenerate: { directory: 'app-dev' } }],
				},
				{
					label: 'Kubernetes & Cloud Native',
					items: [{ autogenerate: { directory: 'kubernetes' } }],
				},
			],
		}),
	],
});
