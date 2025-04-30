export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/contact": [3],
		"/faq": [4],
		"/work": [5],
		"/work/community-peer-mentors": [7],
		"/work/durham-pcc": [8],
		"/work/jet-and-ben": [9],
		"/work/northern-heritage-roofing": [10],
		"/work/victim-care-and-advice-service": [11],
		"/work/[slug]": [6]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';