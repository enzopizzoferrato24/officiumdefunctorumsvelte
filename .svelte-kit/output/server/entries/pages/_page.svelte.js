import { y as head, F as build_title } from "../../chunks/index.js";
import { P as PageImage } from "../../chunks/PageImage.js";
/* empty css                                                         */
function _page($$renderer) {
  head($$renderer, ($$renderer2) => {
    build_title($$renderer2, () => {
      $$renderer2.push(`<title>Office of the Dead Documents</title>`);
    });
  });
  $$renderer.push(`<section class="svelte-1uha8ag">`);
  PageImage($$renderer, { src: "/visuals/souls.jpeg", alt: "Souls" });
  $$renderer.push(`<!----> <div class="paracol svelte-1uha8ag"><div class="latin-column svelte-1uha8ag"><h2 class="svelte-1uha8ag">Restoring an Ancient Tradition</h2> <p class="svelte-1uha8ag">It is easier for a camel to pass through the eye of a needle than for a rich man to enter the kingdom of heaven. For most of Christian history, wealthy Christians were acutely aware of Christ's words, especially those in the business class, whose daily dealings inevitably involved encounters with venial sins of dishonesty, pride, and greed. Not all could follow His command to "sell everything and give it to the poor," so they felt an urgent imperative to work out their salvation with fear and trembling and find remission of temporal punishment by commissioning others to pray for them now and after their death.</p> <p class="svelte-1uha8ag">Hence, the creation of foundations, monasteries, and chantries—endowments to fund the praying of Masses and the Office of the Dead, for the forgiveness of both known and unknown sins. In an age where the consequences of sin were taken with the utmost seriousness, this practice offered the affluent a way to seek mercy, not just for themselves, but for their families and others trapped in purgatory.</p> <p class="svelte-1uha8ag">This purgatorial economy gave rise to our hospitals, schools, and orphanages, originally tasked with praying for the souls of their founders. Modern revolutions and secularism wiped out most of this work, leaving us only with vestigial structures, but the urgency of prayer for the dead remains and in fact has grown. This initiative revives that tradition in a bold and novel way—by establishing again stipends for literate laymen to recite the office.</p></div> <div class="english-column svelte-1uha8ag"><img src="/visuals/crucifixion.png" alt="Crucifixion" class="crucifixion-image svelte-1uha8ag"/></div></div></section>`);
}
export {
  _page as default
};
