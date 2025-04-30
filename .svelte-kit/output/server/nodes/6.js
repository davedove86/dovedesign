

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/_slug_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.d0fc2dcd.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.2226f978.js","_app/immutable/chunks/projectData.00f368d4.js"];
export const stylesheets = ["_app/immutable/assets/6.6f4ce0bf.css"];
export const fonts = [];
