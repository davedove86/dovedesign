import { c as create_ssr_component, f as each, v as validate_component, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { p as projects } from "../../../chunks/projectData.js";
import { T as Testimonials } from "../../../chunks/Testimonials.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".work-wrapper.svelte-1m1mt6z{margin:2rem 0}.grid-col-2.svelte-1m1mt6z{margin:3rem 0;padding-bottom:3rem;border-bottom:0.5px solid var(--black-blue)}h2.svelte-1m1mt6z{font-size:2rem}.portfolio-image.svelte-1m1mt6z{width:100%;height:100%;object-fit:cover}.tags-wrapper.svelte-1m1mt6z{display:flex;flex-direction:row;margin:1rem 0}.tags.svelte-1m1mt6z{color:var(--accent-blue);background-color:var(--grey);padding:4px 8px;margin-right:0.5rem;font-weight:800;border-radius:4px}button.svelte-1m1mt6z{margin:2rem 0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section><div class="container"><h1 data-svelte-h="svelte-15p12fn">Our Work</h1> <div class="work-wrapper svelte-1m1mt6z"></div> ${each(projects, (project) => {
    return `<div class="grid-col-2 svelte-1m1mt6z"><div data-svelte-h="svelte-1swq17s"><img class="portfolio-image svelte-1m1mt6z"${add_attribute("src", project.image, 0)} alt="${escape(project.name, true) + " website"}"></div> <div><h2 class="svelte-1m1mt6z">${escape(project.name)}</h2> <div class="tags-wrapper svelte-1m1mt6z">${each(project.tags, (tag) => {
      return `<div class="tags svelte-1m1mt6z"><p>${escape(tag)}</p> </div>`;
    })}</div> <p>${escape(project.kicker)}</p> <a${add_attribute("href", project.link, 0)} rel="noopener noreferrer" data-svelte-h="svelte-10x3yez"><button class="svelte-1m1mt6z">View Project</button> </a></div> </div>`;
  })}</div></section> ${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
