import { w as attr_class, G as attr, x as bind_props, K as stringify } from "./index.js";
import { j as fallback } from "./context.js";
function PageImage($$renderer, $$props) {
  let src = fallback($$props["src"], "");
  let alt = fallback($$props["alt"], "");
  let position = fallback(
    $$props["position"],
    "top"
    // 'top' or 'bottom'
  );
  $$renderer.push(`<div${attr_class(`page-image-${stringify(position)}`, "svelte-o0jji7")}><img${attr("src", src)}${attr("alt", alt)} class="decorative-image svelte-o0jji7"/></div>`);
  bind_props($$props, { src, alt, position });
}
export {
  PageImage as P
};
