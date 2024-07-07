import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import { $ as $$Instruction } from './Instruction_koVtahii.mjs';
import { a as $$Layout } from './Layout_C65wMquY.mjs';
import { $ as $$Herotext } from './Herotext_DwQh6irv.mjs';
/* empty css                              */

const $$Astro = createAstro("https://mcmeddon.com");
const $$SmpDynmap = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SmpDynmap;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "World Dynmaps", "data-astro-cid-y3tdqmkn": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-y3tdqmkn> ${renderComponent($$result2, "Herotext", $$Herotext, { "h1": "SMP Dynmaps", "p": "Enjoy exploring dozens of Custom Worlds in a 3D Overview", "p2": "Hint: You can select new worlds in the right sidepanel", "body": "", "data-astro-cid-y3tdqmkn": true }, { "default": ($$result3) => renderTemplate` <br data-astro-cid-y3tdqmkn> <br data-astro-cid-y3tdqmkn> <button class="btn" data-astro-cid-y3tdqmkn> <a href="http://map.mcmeddon.com" data-astro-cid-y3tdqmkn>World Map Direct Link </a></button> ` })} <div data-astro-cid-y3tdqmkn></div> <iframe loading="lazy" class="dynmap" title="World Dynmaps" src="https://bluemap.mcmeddon.com/?worldname=Jesankor&mapname=surface&zoom=0&x=4662&y=64&z=3745" data-astro-cid-y3tdqmkn>
</iframe> <div class="instruction" data-astro-cid-y3tdqmkn> ${renderComponent($$result2, "Instruction", $$Instruction, { "h2": "Dynmap Bug", "p": " ", "note": "Note", "p2": "", "data-astro-cid-y3tdqmkn": true }, { "default": ($$result3) => renderTemplate`
Apologies for the incorrectly rendered Dynmap (Leaves misdisplayed).
		It was a dynmap bug from a previous beta that continues to exist 
		Requires a full rerender of all maps to be fixed (is planned).
` })} ${renderComponent($$result2, "Instruction", $$Instruction, { "h2": "Selection of Worlds", "p": "You might notice that not all worlds are included but rather a selection of my 150+ Worlds. With that mentioned, i really would like to add more worlds onto the server, but with more worlds increases the crash chance ", "data-astro-cid-y3tdqmkn": true })} </div> </main> ` })} `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/smp-dynmap.astro", void 0);

const $$file = "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/smp-dynmap.astro";
const $$url = "/smp-dynmap";

export { $$SmpDynmap as default, $$file as file, $$url as url };
