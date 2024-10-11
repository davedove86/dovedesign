import { c as create_ssr_component, f as each, v as validate_component, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { p as projects } from "../../../chunks/projectData.js";
import { T as Testimonials } from "../../../chunks/Testimonials.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".work-wrapper.svelte-gm6unn{margin:2rem 0}.grid-col-2.svelte-gm6unn{margin:3rem 0;padding-bottom:3rem;border-bottom:0.5px solid var(--black-blue)}h2.svelte-gm6unn{font-size:2rem}.portfolio-image.svelte-gm6unn{width:100%;height:100%;object-fit:cover}.tags-wrapper.svelte-gm6unn{display:flex;flex-direction:row;margin:1rem 0}.tags.svelte-gm6unn{color:var(--accent-blue);background-color:var(--grey);padding:4px 8px;margin-right:0.5rem;font-weight:800;border-radius:4px}button.svelte-gm6unn{margin:2rem 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-y89gl1_START -->${$$result.title = `<title>Our Web Design Portfolio | Dove Design Ltd | Creative Website Projects &amp;
    Success Stories</title>`, ""}<meta name="description" content="Explore the web design portfolio of Dove Design Ltd, featuring cutting-edge websites for diverse industries. From e-commerce to corporate sites, see how we deliver outstanding digital experiences."><meta property="og:image" content="/images/open-graph.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Dove Design Ltd"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:secure_url" content="/images/open-graph.jpg"><!-- HEAD_svelte-y89gl1_END -->`, ""} <section><div class="container"><h1 data-svelte-h="svelte-15p12fn">Our Work</h1> <div class="work-wrapper svelte-gm6unn"></div> ${each(projects, (project) => {
    return `<div class="grid-col-2 svelte-gm6unn"><div data-svelte-h="svelte-xjuy3p"><img class="portfolio-image svelte-gm6unn"${add_attribute("src", project.image, 0)} alt="${escape(project.name, true) + " website"}"></div> <div><h2 class="svelte-gm6unn">${escape(project.name)}</h2> <div class="tags-wrapper svelte-gm6unn">${each(project.tags, (tag) => {
      return `<div class="tags svelte-gm6unn"><p>${escape(tag)}</p> </div>`;
    })}</div> <p>${escape(project.kicker)}</p> <a${add_attribute("href", project.link, 0)} rel="noopener noreferrer" data-svelte-h="svelte-15yuvwm"><button class="svelte-gm6unn">View Project</button> </a></div> </div>`;
  })}</div></section> ${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
