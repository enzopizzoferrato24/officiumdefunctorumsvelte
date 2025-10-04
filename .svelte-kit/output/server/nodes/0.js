import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.Bk69T4wW.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/cCqLtxDy.js","_app/immutable/chunks/DPan8l9y.js","_app/immutable/chunks/B5NUpJEU.js","_app/immutable/chunks/CJJJG8JK.js","_app/immutable/chunks/D8nbMnME.js"];
export const stylesheets = ["_app/immutable/assets/0.C2Ycm3Fn.css"];
export const fonts = [];
