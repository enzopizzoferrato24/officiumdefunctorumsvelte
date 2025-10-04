import { w as attr_class, N as clsx, x as bind_props, y as head, F as build_title } from "../../../chunks/index.js";
import { P as PageImage } from "../../../chunks/PageImage.js";
/* empty css                                                            */
import { j as fallback } from "../../../chunks/context.js";
/* empty css                                                     */
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function TwoColumnLayout($$renderer, $$props) {
  let leftContent = fallback($$props["leftContent"], "");
  let rightContent = fallback($$props["rightContent"], "");
  let leftClass = fallback($$props["leftClass"], "column-left");
  let rightClass = fallback($$props["rightClass"], "column-right");
  $$renderer.push(`<div class="paracol svelte-1ggu35t"><div${attr_class(clsx(leftClass), "svelte-1ggu35t")}>${html(leftContent)}</div> <div${attr_class(clsx(rightClass), "svelte-1ggu35t")}>${html(rightContent)}</div></div>`);
  bind_props($$props, { leftContent, rightContent, leftClass, rightClass });
}
function _page($$renderer) {
  head($$renderer, ($$renderer2) => {
    build_title($$renderer2, () => {
      $$renderer2.push(`<title>Vespers - Office of the Dead</title>`);
    });
  });
  PageImage($$renderer, {
    src: "/visuals/animeinpurgatorio.jpeg",
    alt: "Anime in Purgatorio"
  });
  $$renderer.push(`<!----> <h1 class="svelte-1367wql">Vespers</h1> <p class="rubric svelte-1367wql">¶ The Office begins at once with the first Antiphon, as follows.</p> `);
  TwoColumnLayout($$renderer, {
    leftContent: '<span class="rubric">Ant.</span> Placébo <span class="rubric asterisk">*</span> Dómino in regióne vivórum.',
    rightContent: '<span class="rubric">Ant.</span> I will please the Lord in the land of the living.'
  });
  $$renderer.push(`<!----> <h2 class="psalm-title svelte-1367wql">Psalm 114</h2> `);
  TwoColumnLayout($$renderer, {
    leftContent: '<span class="lettrine">D</span>iléxi, quóniam exáudiet Dóminus <span class="rubric asterisk">*</span> vocem oratiónis meæ.',
    rightContent: '<span class="lettrine">I</span> have loved, because the Lord will hear the voice of my prayer.'
  });
  $$renderer.push(`<!----> `);
  TwoColumnLayout($$renderer, {
    leftContent: 'Quia inclinávit aurem suam mihi: <span class="rubric asterisk">*</span> et in diébus meis invocábo.',
    rightContent: "Because he hath inclined his ear unto me: and in my days I will call upon him."
  });
  $$renderer.push(`<!----> `);
  TwoColumnLayout($$renderer, {
    leftContent: 'Circumdedérunt me dolóres mortis: <span class="rubric asterisk">*</span> et perícula inférni invenérunt me.',
    rightContent: "The sorrows of death have compassed me: and the perils of hell have found me."
  });
  $$renderer.push(`<!----> `);
  TwoColumnLayout($$renderer, {
    leftContent: 'Tribulatiónem et dolórem invéni: <span class="rubric asterisk">*</span> et nomen Dómini invocávi.',
    rightContent: "I met with trouble and sorrow: and I called upon the name of the Lord."
  });
  $$renderer.push(`<!----> `);
  TwoColumnLayout($$renderer, {
    leftContent: 'O Dómine, líbera ánimam meam:<span class="rubric dagger">†</span>miséricors Dóminus, et justus, <span class="rubric asterisk">*</span> et Deus noster miserétur.',
    rightContent: "O Lord, deliver my soul: the Lord is merciful and just, and our God sheweth mercy."
  });
  $$renderer.push(`<!----> `);
  TwoColumnLayout($$renderer, {
    leftContent: 'Custódiens párvulos Dóminus: <span class="rubric asterisk">*</span> humiliátus sum, et liberávit me.',
    rightContent: "The Lord is the keeper of little ones: I was little and he delivered me."
  });
  $$renderer.push(`<!----> `);
  TwoColumnLayout($$renderer, {
    leftContent: 'Convértere ánima mea in réquiem tuam: <span class="rubric asterisk">*</span> quia Dóminus benefécit tibi.',
    rightContent: "Turn, O my soul, into thy rest: for the Lord hath been bountiful to thee."
  });
  $$renderer.push(`<!----> `);
  TwoColumnLayout($$renderer, {
    leftContent: 'Quia erípuit ánimam meam de morte:<span class="rubric dagger">†</span>óculos meos a lácrimis, <span class="rubric asterisk">*</span> pedes meos a lapsu.',
    rightContent: "For he hath delivered my soul from death: my eyes from tears, my feet from falling."
  });
  $$renderer.push(`<!----> `);
  TwoColumnLayout($$renderer, {
    leftContent: 'Placébo Dómino <span class="rubric asterisk">*</span> in regióne vivórum.',
    rightContent: "I will please the Lord in the land of the living."
  });
  $$renderer.push(`<!----> `);
  TwoColumnLayout($$renderer, {
    leftContent: "Réquiem ætérnam.",
    rightContent: "Eternal rest."
  });
  $$renderer.push(`<!----> `);
  TwoColumnLayout($$renderer, {
    leftContent: '<span class="rubric">Ant.</span> Placébo Dómino in regióne vivórum.',
    rightContent: '<span class="rubric">Ant.</span> I will please the Lord in the land of the living.'
  });
  $$renderer.push(`<!----> <div class="section-break svelte-1367wql"></div> `);
  TwoColumnLayout($$renderer, {
    leftContent: '<span class="rubric">Ant.</span> Hei mihi <span class="rubric asterisk">*</span> quia incolátus meus prolongátus est.',
    rightContent: '<span class="rubric">Ant.</span> Woe is me that my sojourning is prolonged.'
  });
  $$renderer.push(`<!----> <h2 class="psalm-title svelte-1367wql">Psalm 119</h2> `);
  TwoColumnLayout($$renderer, {
    leftContent: '<span class="lettrine">A</span>d Dóminum cum tribulárer clamávi: <span class="rubric asterisk">*</span> et exaudívit me.',
    rightContent: '<span class="lettrine">I</span>n my trouble I cried to the Lord: and he heard me.'
  });
  $$renderer.push(`<!----> `);
  TwoColumnLayout($$renderer, {
    leftContent: 'Dómine, líbera ánimam meam a lábiis iníquis, <span class="rubric asterisk">*</span> et a lingua dolósa.',
    rightContent: "O Lord, deliver my soul from wicked lips, and from a deceitful tongue."
  });
  $$renderer.push(`<!----> <p class="note svelte-1367wql"><em>This is a simplified version showing the structure. The complete vespers would include all psalms, canticles, and prayers from the original.</em></p>`);
}
export {
  _page as default
};
