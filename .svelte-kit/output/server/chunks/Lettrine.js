import { J as attr_style, x as bind_props, K as stringify } from "./index.js";
/* empty css                                       */
import { j as fallback, l as escape_html } from "./context.js";
function Lettrine($$renderer, $$props) {
  let letter = fallback($$props["letter"], "");
  let color = fallback($$props["color"], "#DC143C");
  $$renderer.push(`<span class="lettrine svelte-1qic5ao"${attr_style(`color: ${stringify(color)}`)}>${escape_html(letter)}</span>`);
  bind_props($$props, { letter, color });
}
export {
  Lettrine as L
};
