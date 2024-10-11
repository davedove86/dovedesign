import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { T as Testimonials } from "../../../chunks/Testimonials.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-bdjedh.svelte-bdjedh{background-color:var(--black-blue);color:var(--white)}form.svelte-bdjedh.svelte-bdjedh{display:flex;flex-direction:column;gap:1rem;margin-top:3rem}form.svelte-bdjedh div.svelte-bdjedh{display:flex;flex-direction:column}form.svelte-bdjedh label.svelte-bdjedh{margin-bottom:0.5rem}form.svelte-bdjedh input.svelte-bdjedh,textarea.svelte-bdjedh.svelte-bdjedh{background-color:var(--black-blue);color:var(--black-blue);border:1px var(--light-grey) solid;border-radius:5px;padding:1rem 2rem 1rem 0.5rem;font-size:1rem;color:var(--white)}form.svelte-bdjedh input.svelte-bdjedh::placeholder,textarea.svelte-bdjedh.svelte-bdjedh::placeholder{color:var(--light-grey)}form.svelte-bdjedh button.svelte-bdjedh{font-size:1rem;font-weight:800}.contact-grid.svelte-bdjedh.svelte-bdjedh{align-content:start}.contact-grid-item.svelte-bdjedh.svelte-bdjedh{margin-bottom:3rem}.contact-icon.svelte-bdjedh.svelte-bdjedh{width:32px;height:32px}.contact-sub-text.svelte-bdjedh.svelte-bdjedh{font-size:1.125rem;font-weight:700;margin:1rem 0}.link.svelte-bdjedh.svelte-bdjedh{color:var(--white)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-xo2hcj_START -->${$$result.title = `<title>Contact Dove Design Ltd | Start Your Website Project Today</title>`, ""}<meta name="description" content="Ready to bring your website to life? Contact the experts at Dove Design Ltd to discuss your project. Get in touch for a free consultation and customized digital solutions."><meta property="og:image" content="/images/open-graph.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Dove Design Ltd"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:secure_url" content="/images/open-graph.jpg"><!-- HEAD_svelte-xo2hcj_END -->`, ""} <section class="svelte-bdjedh" data-svelte-h="svelte-1at0d95"><div class="container"><div class="section-kicker">Contact Us</div> <h2>How can we help?</h2> <p>We&#39;re here to answer any questions you may have. Contact us today!</p> <div class="grid-col-2"><form name="contact" method="POST" data-netlify="true" class="svelte-bdjedh"><input type="hidden" name="form-name" value="contact" class="svelte-bdjedh"> <div class="svelte-bdjedh"><label for="text" class="svelte-bdjedh">Name</label> <input id="text" type="text" name="name" placeholder="Name" required class="svelte-bdjedh"></div> <div class="svelte-bdjedh"><label for="email" class="svelte-bdjedh">Email</label> <input id="email" type="email" name="email" placeholder="Email" required class="svelte-bdjedh"></div> <div class="svelte-bdjedh"><label for="phone" class="svelte-bdjedh">Phone</label> <input id="phone" type="tel" name="phone" placeholder="Phone" class="svelte-bdjedh"></div> <div class="svelte-bdjedh"><label for="textarea" class="svelte-bdjedh">Message</label> <textarea id="textarea" type="textarea" name="message" placeholder="Message" required class="svelte-bdjedh"></textarea></div> <button type="submit" class="svelte-bdjedh">Send</button></form> <div class="grid-col-2 contact-grid svelte-bdjedh"><div class="contact-grid-item svelte-bdjedh"><img class="contact-icon svelte-bdjedh" src="/images/email.svg" alt="envelope"> <div class="contact-sub-text svelte-bdjedh">Email</div> <a href="mailto:info@dovedesign.io" class="link svelte-bdjedh">info@dovedesign.io</a></div> <div class="contact-grid-item svelte-bdjedh"><img class="contact-icon svelte-bdjedh" src="/images/phone.svg" alt="phone"> <div class="contact-sub-text svelte-bdjedh">Phone</div> <a href="tel:07540599633" class="link svelte-bdjedh">07540599633</a></div> <div class="contact-grid-item svelte-bdjedh"><img class="contact-icon svelte-bdjedh" src="/images/linkedin.svg" alt="LinkedIn"> <div class="contact-sub-text svelte-bdjedh">LinkedIn</div> <a href="https://www.linkedin.com/company/dovedesignweb/" target="_blank" class="link svelte-bdjedh">@dovedesignweb</a></div></div></div></div></section> ${validate_component(Testimonials, "Testimonials").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
