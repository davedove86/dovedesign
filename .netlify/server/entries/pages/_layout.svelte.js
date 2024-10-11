import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const Logo = "/images/nav/logo-only.svg";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-ugtjs8.svelte-ugtjs8{width:100%;background-color:var(--white);padding:1rem 0;box-shadow:var(--box-shadow)}.navbar-flex.svelte-ugtjs8.svelte-ugtjs8{display:flex;justify-content:space-between;align-items:center;width:100%}.navbar-flex.svelte-ugtjs8 img.svelte-ugtjs8{width:63px}.nav-items.svelte-ugtjs8 ul.svelte-ugtjs8{display:flex;align-items:center;list-style-type:none}.nav-items.svelte-ugtjs8 ul a.svelte-ugtjs8{text-decoration:none}.nav-items.svelte-ugtjs8 ul li a.svelte-ugtjs8{color:var(--black);padding:0.5rem 1rem}@media(max-width: 760px){.navbar-flex.svelte-ugtjs8.svelte-ugtjs8{flex-direction:column;gap:1rem}.nav-items.svelte-ugtjs8 ul.svelte-ugtjs8{flex-wrap:wrap;justify-content:center}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="svelte-ugtjs8" data-svelte-h="svelte-19dm8pq"><div class="container"><div class="navbar-flex svelte-ugtjs8"><a href="/"><img${add_attribute("src", Logo, 0)} alt="Dove Design Ltd Logo" class="svelte-ugtjs8"></a> <div class="nav-items svelte-ugtjs8"><ul class="svelte-ugtjs8"><li><a href="/work" class="svelte-ugtjs8"><li>Our Work</li></a></li> <li><a href="/faq" class="svelte-ugtjs8"><li>FAQs</li></a></li> <li><a href="/contact" class="svelte-ugtjs8"><li>Contact</li></a></li></ul></div></div></div> </nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-tkm5cl.svelte-tkm5cl{background-color:var(--black-blue);margin-top:auto}.footer-grid.svelte-tkm5cl.svelte-tkm5cl{display:flex;justify-content:space-between;align-items:center;padding:3rem 0}.center-align-grid.svelte-tkm5cl.svelte-tkm5cl{display:flex;justify-content:center;align-items:center;padding:3rem 0}a.svelte-tkm5cl.svelte-tkm5cl,p.svelte-tkm5cl.svelte-tkm5cl{text-decoration:none;color:var(--white);margin:0 1.5rem}ul.svelte-tkm5cl.svelte-tkm5cl{display:flex;gap:1.5rem}ul.svelte-tkm5cl a.svelte-tkm5cl{text-decoration:none;color:var(--white);list-style:none}a.svelte-tkm5cl img.svelte-tkm5cl{height:24px}@media screen and (max-width: 600px){.footer-grid.svelte-tkm5cl.svelte-tkm5cl{display:flex;flex-direction:column;gap:1rem}.center-align-grid.svelte-tkm5cl.svelte-tkm5cl{display:flex;flex-direction:column;gap:1rem}ul.svelte-tkm5cl.svelte-tkm5cl{display:block;text-align:center;margin:1rem 0}ul.svelte-tkm5cl li.svelte-tkm5cl{margin:1rem 0}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-tkm5cl" data-svelte-h="svelte-i2ykmy"><div class="container"><div class="footer-grid svelte-tkm5cl"><a href="/" class="svelte-tkm5cl"><img src="/images/footer-logo.svg" alt="Dove Design Logo" class="svelte-tkm5cl"></a> <div><ul class="svelte-tkm5cl"><li class="svelte-tkm5cl"><a href="/" class="svelte-tkm5cl">Home</a></li> <li class="svelte-tkm5cl"><a href="/work" class="svelte-tkm5cl">Work</a></li> <li class="svelte-tkm5cl"><a href="/faq" class="svelte-tkm5cl">FAQs</a></li> <li class="svelte-tkm5cl"><a href="/contact" class="svelte-tkm5cl">Contact</a></li></ul></div> <a href="https://www.linkedin.com/company/dovedesignweb/" target="_blank" class="svelte-tkm5cl"><img src="/images/linkedin-footer.svg" alt="" class="svelte-tkm5cl"></a></div> <div class="center-align-grid svelte-tkm5cl"><p class="svelte-tkm5cl">©<span id="currentYear">2024</span> Dove Design Ltd</p> <a href="https://www.iubenda.com/privacy-policy/89796861" class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe svelte-tkm5cl" title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w, d) {
          var loader = function () {
            var s = d.createElement("script"),
              tag = d.getElementsByTagName("script")[0];
            s.src = "https://cdn.iubenda.com/iubenda.js";
            tag.parentNode.insertBefore(s, tag);
          };
          if (w.addEventListener) {
            w.addEventListener("load", loader, false);
          } else if (w.attachEvent) {
            w.attachEvent("onload", loader);
          } else {
            w.onload = loader;
          }
        })(window, document);<\/script> <a href="https://www.iubenda.com/privacy-policy/89796861/cookie-policy" class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe svelte-tkm5cl" title="Cookie Policy ">Cookie Policy</a><script type="text/javascript">(function (w, d) {
          var loader = function () {
            var s = d.createElement("script"),
              tag = d.getElementsByTagName("script")[0];
            s.src = "https://cdn.iubenda.com/iubenda.js";
            tag.parentNode.insertBefore(s, tag);
          };
          if (w.addEventListener) {
            w.addEventListener("load", loader, false);
          } else if (w.attachEvent) {
            w.attachEvent("onload", loader);
          } else {
            w.onload = loader;
          }
        })(window, document);<\/script></div></div> </footer>`;
});
const styles = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
