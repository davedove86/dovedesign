

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/work/community-peer-mentors/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.698a1d76.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.2226f978.js","_app/immutable/chunks/projectData.5f283536.js"];
export const stylesheets = ["_app/immutable/assets/6.121ab319.css"];
export const fonts = [];
