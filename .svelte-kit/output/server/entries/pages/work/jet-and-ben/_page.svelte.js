import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { p as projects } from "../../../../chunks/projectData.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1cj7szx{display:flex;flex-direction:column;align-items:center;max-width:1240px}h2.svelte-1cj7szx{margin-top:2rem}img.svelte-1cj7szx{margin-bottom:2rem}p.svelte-1cj7szx{margin-bottom:1rem;white-space:pre-line}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1ox3d3t_START -->${$$result.title = `<title>Durham Constabulary Jet &amp; Ben | Dove Design Ltd | Real Client Success
    Stories</title>`, ""}<meta name="description" content="This page showcases the Jet & Ben website that was developed for the Durham Police’s Safety Dogs as they visit educational settings and other community engagement events."><meta property="og:image" content="/images/open-graph.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Dove Design Ltd"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:secure_url" content="/images/open-graph.jpg"><!-- HEAD_svelte-1ox3d3t_END -->`, ""} <section><div class="container project-container svelte-1cj7szx"><img${add_attribute("src", projects[3].heroImage, 0)} alt="Durham PCC Logo" class="svelte-1cj7szx"> <h1 class="project-heading">${escape(projects[3].name)}</h1> <h2 class="svelte-1cj7szx" data-svelte-h="svelte-1se8v5d">Overview</h2> <p class="project-description svelte-1cj7szx">${escape(projects[3].overview)}</p> <h2 class="svelte-1cj7szx" data-svelte-h="svelte-1lwxwnj">What We Did</h2> <p class="project-description svelte-1cj7szx">${escape(projects[3].whatWeDid)}</p> <h2 class="svelte-1cj7szx" data-svelte-h="svelte-1eudpfj">The Outcome</h2> <p class="project-description svelte-1cj7szx">${escape(projects[3].outcome)}</p> <a${add_attribute("href", projects[3].website, 0)} target="_blank" rel="noopener noreferrer" data-svelte-h="svelte-qn035f"><button>Visit the website</button></a></div> </section>`;
});
export {
  Page as default
};
