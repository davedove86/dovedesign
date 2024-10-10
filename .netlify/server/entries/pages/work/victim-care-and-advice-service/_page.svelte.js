import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { p as projects } from "../../../../chunks/projectData.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1mfoqa{display:flex;flex-direction:column;align-items:center;max-width:1240px}img.svelte-1mfoqa{margin-bottom:2rem}p.svelte-1mfoqa{margin-bottom:1rem}a.svelte-1mfoqa{margin-top:1rem;color:var(--accent-blue);text-decoration:underline}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-18kn2mx_START -->${$$result.title = `<title>Dove Design Ltd | Victim Care &amp; Advice Service</title>`, ""}<meta name="description" content="This page showcases the Victim Care & Advice Service website that was developed for the Durham Police & Crime Commissioner to help support people in the community."><!-- HEAD_svelte-18kn2mx_END -->`, ""} <section><div class="container project-container svelte-1mfoqa"><img${add_attribute("src", projects[1].heroImage, 0)} alt="Durham PCC Logo" class="svelte-1mfoqa"> <h1 class="project-heading">${escape(projects[1].name)}</h1> <p class="project-description svelte-1mfoqa">${escape(projects[1].overview)}</p> <p class="project-description svelte-1mfoqa">${escape(projects[1].overviewTwo)}</p> <a${add_attribute("href", projects[1].website, 0)} target="_blank" rel="noopener noreferrer" class="svelte-1mfoqa" data-svelte-h="svelte-1jehh34">Visit the Website</a></div> </section>`;
});
export {
  Page as default
};
