import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { p as projects } from "../../../../chunks/projectData.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1shee8g{display:flex;flex-direction:column;align-items:center;max-width:1240px}img.svelte-1shee8g{margin-bottom:2rem}p.svelte-1shee8g{margin-bottom:1rem}a.svelte-1shee8g{margin-top:1rem;color:var(--accent-blue);text-decoration:underline}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1iechll_START -->${$$result.title = `<title>Community Peer Mentors | Dove Design Ltd | Real Client Success Stories</title>`, ""}<meta name="description" content="This page showcases the Community Peer Mentors website that was developed for the Durham Police & Crime Commissioner to help support people in the community."><!-- HEAD_svelte-1iechll_END -->`, ""} <section><div class="container project-container svelte-1shee8g"><img${add_attribute("src", projects[3].heroImage, 0)} alt="Durham PCC Logo" class="svelte-1shee8g"> <h1 class="project-heading">${escape(projects[3].name)}</h1> <p class="project-description svelte-1shee8g">${escape(projects[3].overview)}</p> <p class="project-description svelte-1shee8g">${escape(projects[3].overviewTwo)}</p> <a${add_attribute("href", projects[3].website, 0)} target="_blank" rel="noopener noreferrer" class="svelte-1shee8g" data-svelte-h="svelte-d3o09c">Visit the Website</a></div> </section>`;
});
export {
  Page as default
};
