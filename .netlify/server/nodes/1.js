

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5879c430.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.2226f978.js","_app/immutable/chunks/singletons.645ee6b3.js"];
export const stylesheets = [];
export const fonts = [];
