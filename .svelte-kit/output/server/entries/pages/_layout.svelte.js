import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const Logo = "/images/nav/logo-only.svg";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-arv51z.svelte-arv51z{width:100%;background-color:var(--white);padding:1rem 0;box-shadow:var(--box-shadow)}.navbar-flex.svelte-arv51z.svelte-arv51z{display:flex;justify-content:space-between;align-items:center;width:100%}.navbar-flex.svelte-arv51z img.svelte-arv51z{width:63px}.nav-items.svelte-arv51z ul.svelte-arv51z{display:flex;align-items:center;list-style-type:none}.nav-items.svelte-arv51z ul a.svelte-arv51z{text-decoration:none}.nav-items.svelte-arv51z ul a li.svelte-arv51z{color:var(--black);padding:0.5rem 1rem}@media(max-width: 760px){.navbar-flex.svelte-arv51z.svelte-arv51z{flex-direction:column;gap:1rem}.nav-items.svelte-arv51z ul.svelte-arv51z{flex-wrap:wrap;justify-content:center}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="svelte-arv51z" data-svelte-h="svelte-jcxr4v"><div class="container"><div class="navbar-flex svelte-arv51z"><a href="/"><img${add_attribute("src", Logo, 0)} alt="Dove Design Ltd Logo" class="svelte-arv51z"></a> <div class="nav-items svelte-arv51z"><ul class="svelte-arv51z"><a href="/work" class="svelte-arv51z"><li class="svelte-arv51z">Our Work</li></a> <a href="/faq" class="svelte-arv51z"><li class="svelte-arv51z">FAQs</li></a> <a href="/contact" class="svelte-arv51z"><li class="svelte-arv51z">Contact</li></a> </ul></div></div></div> </nav>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-1dt2qv4.svelte-1dt2qv4{background-color:var(--black-blue);margin-top:auto}.footer-grid.svelte-1dt2qv4.svelte-1dt2qv4{display:flex;justify-content:space-between;align-items:center;padding:3rem 0}.center-align-grid.svelte-1dt2qv4.svelte-1dt2qv4{display:flex;justify-content:center;align-items:center;padding:3rem 0}a.svelte-1dt2qv4.svelte-1dt2qv4,p.svelte-1dt2qv4.svelte-1dt2qv4{text-decoration:none;color:var(--white);margin:0 1.5rem}ul.svelte-1dt2qv4.svelte-1dt2qv4{display:flex;gap:1.5rem}ul.svelte-1dt2qv4 a.svelte-1dt2qv4{text-decoration:none;color:var(--white);list-style:none}a.svelte-1dt2qv4 img.svelte-1dt2qv4{height:24px}@media screen and (max-width: 600px){.footer-grid.svelte-1dt2qv4.svelte-1dt2qv4{display:flex;flex-direction:column;gap:1rem}ul.svelte-1dt2qv4.svelte-1dt2qv4{display:block;text-align:center;margin:1rem 0}ul.svelte-1dt2qv4 a li.svelte-1dt2qv4{margin:1rem 0}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-1dt2qv4" data-svelte-h="svelte-1c74xfy"><div class="container"><div class="footer-grid svelte-1dt2qv4"><a href="/" class="svelte-1dt2qv4"><img src="/images/footer-logo.svg" alt="Dove Design Logo" class="svelte-1dt2qv4"></a> <div><ul class="svelte-1dt2qv4"><a href="/" class="svelte-1dt2qv4"><li class="svelte-1dt2qv4">Home</li></a> <a href="/work" class="svelte-1dt2qv4"><li class="svelte-1dt2qv4">Our Work</li></a> <a href="/faq" class="svelte-1dt2qv4"><li class="svelte-1dt2qv4">FAQs</li></a> <a href="/contact" class="svelte-1dt2qv4"><li class="svelte-1dt2qv4">Contact</li></a></ul></div> <a href="https://www.linkedin.com/company/dovedesignweb/" target="_blank" class="svelte-1dt2qv4"><img src="/images/linkedin-footer.svg" alt="" class="svelte-1dt2qv4"></a></div> <div class="center-align-grid svelte-1dt2qv4"><p class="svelte-1dt2qv4">©<span id="currentYear">2024</span> Dove Design Ltd</p> <a href="https://www.iubenda.com/privacy-policy/89796861" class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe svelte-1dt2qv4" title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w, d) {
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
        })(window, document);<\/script> <a href="https://www.iubenda.com/privacy-policy/89796861/cookie-policy" class="iubenda-nostyle no-brand iubenda-noiframe iubenda-embed iubenda-noiframe svelte-1dt2qv4" title="Cookie Policy ">Cookie Policy</a><script type="text/javascript">(function (w, d) {
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
