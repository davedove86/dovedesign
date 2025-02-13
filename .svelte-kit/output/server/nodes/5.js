

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.a82aa5bc.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.2226f978.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/projectData.00f368d4.js","_app/immutable/chunks/Testimonials.667d53e7.js"];
export const stylesheets = ["_app/immutable/assets/5.e0d370a0.css","_app/immutable/assets/Testimonials.7ec6779c.css"];
export const fonts = [];
