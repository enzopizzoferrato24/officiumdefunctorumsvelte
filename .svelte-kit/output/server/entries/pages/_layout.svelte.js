import { w as attr_class, x as bind_props, y as head, z as slot, F as build_title } from "../../chunks/index.js";
import { j as fallback } from "../../chunks/context.js";
import "clsx";
function Header($$renderer, $$props) {
  let currentPage = fallback($$props["currentPage"], "");
  $$renderer.push(`<header class="svelte-zne36e"><h1 class="svelte-zne36e"><a href="/" class="svelte-zne36e">OFFICIVM<br/>DEFVNCTORVM</a></h1> <nav class="svelte-zne36e"><ul class="svelte-zne36e"><li class="svelte-zne36e"><a href="/about"${attr_class("svelte-zne36e", void 0, { "active": currentPage === "about" })}>About</a></li> <li class="svelte-zne36e"><a href="/preparation"${attr_class("svelte-zne36e", void 0, { "active": currentPage === "preparation" })}>Preparation</a></li> <li class="svelte-zne36e"><a href="/vespers"${attr_class("svelte-zne36e", void 0, { "active": currentPage === "vespers" })}>Vespers</a></li> <li class="svelte-zne36e"><a href="/matins"${attr_class("svelte-zne36e", void 0, { "active": currentPage === "matins" })}>Matins</a></li> <li class="svelte-zne36e"><a href="/lauds"${attr_class("svelte-zne36e", void 0, { "active": currentPage === "lauds" })}>Lauds</a></li> <li class="svelte-zne36e"><a href="/purchase"${attr_class("svelte-zne36e", void 0, { "active": currentPage === "purchase" })}>Purchase</a></li></ul></nav></header>`);
  bind_props($$props, { currentPage });
}
function Footer($$renderer) {
  $$renderer.push(`<footer class="svelte-9sff3o"><div class="footer-content svelte-9sff3o"><div class="footer-branding svelte-9sff3o"><a href="https://sicutincensum.wordpress.com/" class="image-link"><img src="/visuals/CS_LOGO_Full_white.png" alt="Canticum Salomonis Logo" class="footer-logo svelte-9sff3o"/></a></div> <div class="footer-links svelte-9sff3o"><span>© 2025</span> <a href="mailto:canticumsalomonis@gmail.com" class="svelte-9sff3o">Contact</a></div></div></footer>`);
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    head($$renderer2, ($$renderer3) => {
      build_title($$renderer3, () => {
        $$renderer3.push(`<title>Office of the Dead Documents</title>`);
      });
    });
    Header($$renderer2, { currentPage: data?.currentPage || "" });
    $$renderer2.push(`<!----> <main class="svelte-12qhfyh"><!---->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!----></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
    bind_props($$props, { data });
  });
}
export {
  _layout as default
};
