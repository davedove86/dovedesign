import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","android-chrome-192x192.png","android-chrome-256x256.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","images/.DS_Store","images/cpm-logo.png","images/cta-banner.jpg","images/design.svg","images/email.svg","images/flowga-portfolio.png","images/footer-logo.svg","images/home-hero.png","images/hosting.svg","images/linkedin-footer.svg","images/linkedin.svg","images/medal.svg","images/nav/logo-only.svg","images/open-graph.jpg","images/pcc-logo.png","images/phone.svg","images/responsive.svg","images/section-image.webp","images/star.svg","images/tick.svg","images/work/cpm-hero.png","images/work/cpm-portfolio.png","images/work/flowga-portfolio.png","images/work/jetandben-hero.png","images/work/jetandben-portfolio.png","images/work/pcc-hero.png","images/work/pcc-portfolio.png","images/work/vcas-hero.png","images/work/vcas-portfolio.png","mstile-150x150.png","robots.txt","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".jpg":"image/jpeg",".svg":"image/svg+xml",".webp":"image/webp",".txt":"text/plain",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.1810b2a4.js","app":"_app/immutable/entry/app.d6d3c1a7.js","imports":["_app/immutable/entry/start.1810b2a4.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.c2708515.js","_app/immutable/entry/app.d6d3c1a7.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.2226f978.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/sitemap.xml/_server.ts.js'))
			},
			{
				id: "/work",
				pattern: /^\/work\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/work/community-peer-mentors",
				pattern: /^\/work\/community-peer-mentors\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/work/durham-pcc",
				pattern: /^\/work\/durham-pcc\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/work/jet-and-ben",
				pattern: /^\/work\/jet-and-ben\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/work/victim-care-and-advice-service",
				pattern: /^\/work\/victim-care-and-advice-service\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
