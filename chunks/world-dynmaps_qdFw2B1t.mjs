import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import { $ as $$Instruction } from './Instruction_koVtahii.mjs';
import { a as $$Layout } from './Layout_C65wMquY.mjs';
import { $ as $$Herotext } from './Herotext_DwQh6irv.mjs';
/* empty css                                 */

const $$Astro = createAstro("https://mcmeddon.com");
const $$WorldDynmaps = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorldDynmaps;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "World Dynmaps", "data-astro-cid-76uo53mb": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-76uo53mb> ${renderComponent($$result2, "Herotext", $$Herotext, { "h1": "World Dynmaps", "p": "Enjoy exploring dozens of Custom Worlds in a 3D Overview", "p2": "Hint: You can select new worlds in the right sidepanel", "body": "", "data-astro-cid-76uo53mb": true })} <div data-astro-cid-76uo53mb></div> <iframe loading="lazy" class="dynmap" title="World Dynmaps" src="https://mcmeddonworlds.my.pebble.host/?worldname=Jesankor&mapname=surface&zoom=0&x=4662&y=64&z=3745" data-astro-cid-76uo53mb>
</iframe> <div class="instruction" data-astro-cid-76uo53mb> ${renderComponent($$result2, "Instruction", $$Instruction, { "h2": "Dynmap Bug", "p": " ", "note": "Note", "p2": "", "data-astro-cid-76uo53mb": true }, { "default": ($$result3) => renderTemplate`
Apologies for the incorrectly rendered Dynmap (leaves misdisplayed).
		It was a dynmap bug from a previous beta that continues to exist 
		requires a full rerender of all maps to be fixed (is planned).
` })} ${renderComponent($$result2, "Instruction", $$Instruction, { "h2": "Selection of Worlds", "p": "You might notice that not all worlds are included but rather a selection of my 150+ Worlds. With that mentioned, i really would like to add more worlds onto the server, but with more worlds increases the crash chance ", "data-astro-cid-76uo53mb": true })} </div> </main> ` })} `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/world-dynmaps.astro", void 0);

const $$file = "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/world-dynmaps.astro";
const $$url = "/world-dynmaps";

export { $$WorldDynmaps as default, $$file as file, $$url as url };
