

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/faq/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.9351a8ac.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.2226f978.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = ["_app/immutable/assets/4.d4a014d6.css"];
export const fonts = [];
