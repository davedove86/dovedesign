import { c as create_ssr_component, f as each, e as escape, b as add_attribute } from "./ssr.js";
const testimonials = [
  {
    id: 1,
    name: "Jim Cunningham",
    title: "Community Peer Mentors",
    crest: "/images/cpm-logo.png",
    quote: '"I cannot praise Dove Design enough. From the very start of this project they were very professional, providing great support, advice and guidance at all times. The process was quick and completed before the deadline and the final product was brilliant. Thank you so much for everything."'
  },
  {
    id: 2,
    name: "Steve White",
    title: "Durham Police & Crime Commissioner",
    crest: "/images/pcc-logo.png",
    quote: '"We commissioned our new website with Dove Design and they have been fantastic to work with on this major project. They were brilliant to work with during development of the project, were quick to respond to any queries we had and were always available to contact. We would recommend to anyone."'
  }
];
const Testimonials_svelte_svelte_type_style_lang = "";
const css = {
  code: ".testimonials.svelte-ntl4c6.svelte-ntl4c6{margin:2rem 0 0 0}.testimonial-item.svelte-ntl4c6.svelte-ntl4c6{display:flex;gap:1rem;margin:2rem 0}.testimonial-item.svelte-ntl4c6 .bold.svelte-ntl4c6{font-weight:700}.testimonial-item.svelte-ntl4c6 img.svelte-ntl4c6{width:56px;height:56px}.star-wrap.svelte-ntl4c6.svelte-ntl4c6{margin:2rem 0}.star-wrap.svelte-ntl4c6 img.svelte-ntl4c6{width:24px}",
  map: null
};
const Testimonials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section><div class="container"><h2 data-svelte-h="svelte-gl34zw">Happy Clients</h2> <p data-svelte-h="svelte-130l551">Hear what our clients have to say about our Webflow services</p> <div class="grid-col-2 testimonials svelte-ntl4c6">${each(testimonials, (testimonial) => {
    return `<div><div class="star-wrap svelte-ntl4c6" data-svelte-h="svelte-1mkximo"><img src="/images/star.svg" alt="blue star" class="svelte-ntl4c6"> <img src="/images/star.svg" alt="blue star" class="svelte-ntl4c6"> <img src="/images/star.svg" alt="blue star" class="svelte-ntl4c6"> <img src="/images/star.svg" alt="blue star" class="svelte-ntl4c6"> <img src="/images/star.svg" alt="blue star" class="svelte-ntl4c6"></div> <p>${escape(testimonial.quote)}</p> <div class="testimonial-item svelte-ntl4c6"><img${add_attribute("src", testimonial.crest, 0)} alt="Community Peer Mentors Logo" class="svelte-ntl4c6"> <div class="testimonial-text"><p class="bold svelte-ntl4c6">${escape(testimonial.name)}</p> <p>${escape(testimonial.title)}</p> </div></div> </div>`;
  })}</div></div> </section>`;
});
export {
  Testimonials as T
};
