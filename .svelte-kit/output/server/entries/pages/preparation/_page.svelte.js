import { y as head, F as build_title } from "../../../chunks/index.js";
import { P as PageImage } from "../../../chunks/PageImage.js";
function _page($$renderer) {
  head($$renderer, ($$renderer2) => {
    build_title($$renderer2, () => {
      $$renderer2.push(`<title>Preparation - Office of the Dead</title>`);
    });
  });
  $$renderer.push(`<section class="svelte-1of5sjm">`);
  PageImage($$renderer, { src: "/visuals/souls.jpeg", alt: "Souls" });
  $$renderer.push(`<!----> <h1 class="svelte-1of5sjm">Preparation</h1> <div class="content svelte-1of5sjm"><p>This page would contain the preparation instructions for the Office of the Dead.</p> <p><em>Content to be added based on the original preparation.html file.</em></p></div></section>`);
}
export {
  _page as default
};
