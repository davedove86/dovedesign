import { c as create_ssr_component, e as escape, b as add_attribute, f as each } from "../../../../chunks/ssr.js";
import { p as projects } from "../../../../chunks/projectData.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-zp3aci.svelte-zp3aci{display:flex;flex-direction:column;align-items:center;max-width:1240px}.tags-wrapper.svelte-zp3aci.svelte-zp3aci{display:flex;flex-direction:row;gap:1rem}.tags.svelte-zp3aci p.svelte-zp3aci{background-color:#eee;color:var(--accent-blue);padding:0.5rem 1rem;border-radius:5px}.client-wrapper.svelte-zp3aci.svelte-zp3aci{display:flex;flex-direction:row;justify-content:space-evenly;margin-top:2rem;gap:3rem;width:100%}.client-item.svelte-zp3aci.svelte-zp3aci{display:flex;flex-direction:column;gap:1rem;text-align:center}h1.svelte-zp3aci.svelte-zp3aci{text-align:center}img.svelte-zp3aci.svelte-zp3aci{margin-bottom:2rem}h2.svelte-zp3aci.svelte-zp3aci{margin-top:2rem}p.svelte-zp3aci.svelte-zp3aci{margin-bottom:1rem;white-space:pre-line}a.svelte-zp3aci.svelte-zp3aci{color:var(--accent-blue)}.testimonial-wrapper.svelte-zp3aci.svelte-zp3aci{text-align:center;max-width:800px}.testimonial-wrapper.svelte-zp3aci h3.svelte-zp3aci{font-size:1.25rem;line-height:1.6}.testimonial-wrapper.svelte-zp3aci img.svelte-zp3aci{margin-top:1rem}.testimonial-wrapper.svelte-zp3aci p.svelte-zp3aci{font-weight:bold;margin-bottom:0}@media(max-width: 768px){.client-wrapper.svelte-zp3aci.svelte-zp3aci{flex-direction:column;gap:1rem}h2.svelte-zp3aci.svelte-zp3aci{margin-top:1rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1cgycgf_START -->${$$result.title = `<title>${escape(projects[3].name)} | Dove Design Ltd | Real Client Success Stories</title>`, ""}<meta name="description"${add_attribute("content", projects[3].overview, 0)}><meta property="og:image" content="https://dovedesign.io/images/open-graph.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Dove Design Ltd"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:secure_url" content="https://dovedesign.io/images/open-graph.jpg"><!-- HEAD_svelte-1cgycgf_END -->`, ""} <section><div class="container project-container svelte-zp3aci"><img${add_attribute("src", projects[3].heroImage, 0)} alt="Durham PCC Logo" class="svelte-zp3aci"> <h1 class="project-heading svelte-zp3aci">${escape(projects[3].name)}</h1> <div class="tags-wrapper svelte-zp3aci">${each(projects[3].tags, (tag) => {
    return `<div class="tags svelte-zp3aci"><p class="svelte-zp3aci">${escape(tag)}</p> </div>`;
  })}</div> <div class="client-wrapper svelte-zp3aci"><div class="client-item svelte-zp3aci"><h3 data-svelte-h="svelte-1cnkhaf">Client</h3> <p class="svelte-zp3aci">${escape(projects[3].clientName)}</p></div> <div class="client-item svelte-zp3aci"><h3 data-svelte-h="svelte-h4ffs9">Website</h3> <a href="https://www.durham-pcc.gov.uk" target="_blank" class="svelte-zp3aci">${escape(projects[3].website)}</a></div> <div class="client-item svelte-zp3aci"><h3 data-svelte-h="svelte-1ym5djk">Date</h3> <p class="svelte-zp3aci">${escape(projects[3].date)}</p></div></div> <h2 class="svelte-zp3aci" data-svelte-h="svelte-1se8v5d">Overview</h2> <p class="project-description svelte-zp3aci">${escape(projects[3].overview)}</p> <h2 class="svelte-zp3aci" data-svelte-h="svelte-1lwxwnj">What We Did</h2> <p class="project-description svelte-zp3aci">${escape(projects[3].whatWeDid)}</p> <h2 class="svelte-zp3aci" data-svelte-h="svelte-1eudpfj">The Outcome</h2> <p class="project-description svelte-zp3aci">${escape(projects[3].outcome)}</p></div></section>  <section><div class="container svelte-zp3aci"><div class="testimonial-wrapper svelte-zp3aci"><h3 class="svelte-zp3aci">${escape(projects[3].testimonialQuote)}</h3> <img style="max-width: 200px;"${add_attribute("src", projects[3].crest, 0)}${add_attribute("alt", projects[3].clientName, 0)} class="svelte-zp3aci"> <p class="svelte-zp3aci">${escape(projects[3].testimonialName)}</p> <p style="font-weight: 400;" class="svelte-zp3aci">${escape(projects[3].testimonialTitle)}</p></div></div></section>  `;
});
export {
  Page as default
};
