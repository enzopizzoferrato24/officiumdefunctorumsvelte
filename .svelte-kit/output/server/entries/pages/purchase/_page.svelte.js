import { y as head, G as attr, F as build_title } from "../../../chunks/index.js";
import { P as PageImage } from "../../../chunks/PageImage.js";
import { L as Lettrine } from "../../../chunks/Lettrine.js";
import { l as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let formData = {
      firstName: "",
      lastName: "",
      email: "",
      newsletter: false,
      amount: "10",
      intentions: ""
    };
    head($$renderer2, ($$renderer3) => {
      build_title($$renderer3, () => {
        $$renderer3.push(`<title>Purchase - Office of the Dead</title>`);
      });
    });
    $$renderer2.push(`<section class="purchase-hero svelte-1b0yz4g">`);
    PageImage($$renderer2, { src: "/visuals/requiem.jpeg", alt: "Souls" });
    $$renderer2.push(`<!----></section> <section class="book-purchase svelte-1b0yz4g"><h1 class="svelte-1b0yz4g">BOOK PURCHASE</h1> <div class="book-content svelte-1b0yz4g"><div class="book-description svelte-1b0yz4g"><p>`);
    Lettrine($$renderer2, { letter: "C", color: "#DC143C" });
    $$renderer2.push(`<!---->anticum Salomonis is pleased to announce the publication of our latest book, a pocket-sized (4 × 6 in) edition of <strong>the traditional Roman Office of the Dead</strong> with facing English translation.</p> <p>The text of the Office is that found in the <strong>1568 Roman breviary</strong>, incorporating the additional orations—a second one for the day of burial; those for the three-day, week, and month anniversaries; for a deceased supreme pontiff; for a deceased bishop; two for a deceased priest; for a man deceased; for a woman deceased; and for deceased brethren, kinsfolk, and benefactors—included in the 1614 Roman ritual.</p> <p>The rubrics are in English, and the English translation of the psalms, as is the case in our Compline book, is that of the original Douay-Rheims version, with modernized spelling.</p> <p>The booklet also features a <strong>meditation on the mystical meaning of the Office of the Dead</strong> borrowed from Dom Prosper Guéranger's <em>Liturgical Year</em>, Englished by the Benedictines of Stanbrook, the text of the usual indulgenced prayers said before and after an Office, and a section at the back for the user to record his prayer intentions.</p></div> <div class="amazon-links svelte-1b0yz4g"><h3 class="svelte-1b0yz4g">IT IS AVAILABLE IN SOFTCOVER ON THE</h3> <div class="store-links svelte-1b0yz4g"><a href="https://www.amazon.com/dp/B0DFGPNVHB" class="store-link us svelte-1b0yz4g" target="_blank">US</a> <a href="https://www.amazon.co.uk/dp/B0DFGPNVHB" class="store-link uk svelte-1b0yz4g" target="_blank">UK</a> <a href="https://www.amazon.ca/dp/B0DFGPNVHB" class="store-link canadian svelte-1b0yz4g" target="_blank">CANADIAN</a> <a href="https://www.amazon.es/dp/B0DFGPNVHB" class="store-link spanish svelte-1b0yz4g" target="_blank">SPANISH</a> <a href="https://www.amazon.fr/dp/B0DFGPNVHB" class="store-link french svelte-1b0yz4g" target="_blank">FRENCH</a> <a href="https://www.amazon.it/dp/B0DFGPNVHB" class="store-link italian svelte-1b0yz4g" target="_blank">ITALIAN</a> <a href="https://www.amazon.de/dp/B0DFGPNVHB" class="store-link german svelte-1b0yz4g" target="_blank">GERMAN</a> <a href="https://www.amazon.nl/dp/B0DFGPNVHB" class="store-link dutch svelte-1b0yz4g" target="_blank">DUTCH</a> <a href="https://www.amazon.pl/dp/B0DFGPNVHB" class="store-link polish svelte-1b0yz4g" target="_blank">POLISH</a> <a href="https://www.amazon.se/dp/B0DFGPNVHB" class="store-link swedish svelte-1b0yz4g" target="_blank">SWEDISH</a></div> <h3 class="amazon-stores svelte-1b0yz4g">AMAZON STORES.</h3></div></div></section> <section class="commission-prayer svelte-1b0yz4g"><h2 class="section-title svelte-1b0yz4g">COMMISSION PRAYER</h2> <div class="commission-content svelte-1b0yz4g"><div class="commission-text"><p>`);
    Lettrine($$renderer2, { letter: "F", color: "#DC143C" });
    $$renderer2.push(`<!---->or centuries, wealthy Christians, mindful of Christ's teaching that it is easier for a camel to pass through the eye of a needle than for a rich person to enter the kingdom of heaven, sought to work out their salvation with fear and trembling. Unable to fully heed the call to "sell everything and give it to the poor," they established foundations, monasteries, and chantries—endowments to fund Masses and the Office of the Dead for the forgiveness of sins, both known and unknown.</p> <p>This purgatorial economy not only offered mercy for themselves and their loved ones but also gave rise to hospitals, schools, and orphanages dedicated to praying for their founders' souls. Though modern secularism has diminished these practices, the urgent need for prayer for the dead persists. This initiative revives that sacred tradition by offering stipends for literate laymen to recite the Office, interceding for souls in purgatory.</p> <div class="stipend-info svelte-1b0yz4g"><p class="svelte-1b0yz4g"><strong>Stipend:</strong> $10 per Office (or more, as you are able).</p> <p class="svelte-1b0yz4g"><strong>Payment:</strong> You'll receive instructions to send payment directly to the pray-er. We are not providing tax-deductible receipts at this stage.</p></div></div> <div class="commission-form svelte-1b0yz4g">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<form><div class="form-group svelte-1b0yz4g"><label for="firstName" class="svelte-1b0yz4g">Name <span class="required svelte-1b0yz4g">(required)</span></label> <div class="name-fields svelte-1b0yz4g"><input type="text" id="firstName"${attr("value", formData.firstName)} placeholder="First Name" required class="svelte-1b0yz4g"/> <input type="text" id="lastName"${attr("value", formData.lastName)} placeholder="Last Name" required class="svelte-1b0yz4g"/></div></div> <div class="form-group svelte-1b0yz4g"><label for="email" class="svelte-1b0yz4g">Email <span class="required svelte-1b0yz4g">(required)</span></label> <input type="email" id="email"${attr("value", formData.email)} required class="svelte-1b0yz4g"/></div> <div class="form-group checkbox-group svelte-1b0yz4g"><label class="svelte-1b0yz4g"><input type="checkbox"${attr("checked", formData.newsletter, true)} class="svelte-1b0yz4g"/> Sign up for news and updates</label></div> <div class="form-group svelte-1b0yz4g"><label for="amount" class="svelte-1b0yz4g">Amount per Office</label> <div class="amount-input svelte-1b0yz4g"><span class="currency svelte-1b0yz4g">$</span> <input type="number" id="amount"${attr("value", formData.amount)} min="10" placeholder="10" step="1" class="svelte-1b0yz4g"/></div></div> <div class="form-group svelte-1b0yz4g"><label for="intentions" class="svelte-1b0yz4g">Intentions</label> <textarea id="intentions" placeholder="[Name, number of offices]" rows="4" class="svelte-1b0yz4g">`);
      const $$body = escape_html(formData.intentions);
      if ($$body) {
        $$renderer2.push(`${$$body}`);
      }
      $$renderer2.push(`</textarea></div> <button type="submit" class="submit-btn svelte-1b0yz4g">SUBMIT</button></form>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  });
}
export {
  _page as default
};
