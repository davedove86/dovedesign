

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.642e0e90.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.2226f978.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/projectData.c2104afa.js","_app/immutable/chunks/Testimonials.c61882bc.js"];
export const stylesheets = ["_app/immutable/assets/5.e0d370a0.css","_app/immutable/assets/Testimonials.99a445f3.css"];
export const fonts = [];
