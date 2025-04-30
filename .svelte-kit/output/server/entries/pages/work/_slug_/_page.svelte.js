import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../../chunks/ssr.js";
import { p as projects } from "../../../../chunks/projectData.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-zp3aci{display:flex;flex-direction:column;align-items:center;max-width:1240px}h1.svelte-zp3aci{text-align:center}@media(max-width: 768px){}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1j91umc_START -->${$$result.title = `<title>${escape(projects[0].name)} | Dove Design Ltd | Real Client Success Stories</title>`, ""}<meta name="description"${add_attribute("content", projects[3].overview, 0)}><meta property="og:image" content="https://dovedesign.io/images/open-graph.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Dove Design Ltd"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:secure_url" content="https://dovedesign.io/images/open-graph.jpg"><!-- HEAD_svelte-1j91umc_END -->`, ""} <section><div class="container svelte-zp3aci"><h1 class="svelte-zp3aci">${escape(projects[1].name)}</h1></div> </section>`;
});
export {
  Page as default
};
