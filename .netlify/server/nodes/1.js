

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9dc578f0.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.2226f978.js","_app/immutable/chunks/singletons.1ccbe374.js"];
export const stylesheets = [];
export const fonts = [];
