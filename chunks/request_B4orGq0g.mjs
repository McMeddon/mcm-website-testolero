import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import { $ as $$Instruction } from './Instruction_koVtahii.mjs';
import { a as $$Layout } from './Layout_C65wMquY.mjs';
import { $ as $$Herotext } from './Herotext_DwQh6irv.mjs';
/* empty css                           */

const $$Astro = createAstro("https://mcmeddon.com");
const $$Request = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Request;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Feature Requests & Idea Proposals", "data-astro-cid-p7hsejmp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-p7hsejmp> ${renderComponent($$result2, "Herotext", $$Herotext, { "h1": "Feature Requests & Idea Proposals", "p": "- Elevating future worlds with your suggestions - Here is the place to let your ideas free \u{1F4A1}", "p2": "", "body": "", "data-astro-cid-p7hsejmp": true })} <div class="gformwrapper" data-astro-cid-p7hsejmp> <div class="skeleton" style="" data-astro-cid-p7hsejmp> <iframe loading="lazy" title="Formular for Feature Requests & Idea Proposals" class="gform" src="https://docs.google.com/forms/d/e/1FAIpQLSdl7xhl_N6uXFkR0-ha-issucwTmc94E3wmdjcBN5yD0OgSig/viewform?embedded=true" height="2024px" frameborder="0" marginheight="0" marginwidth="0" data-astro-cid-p7hsejmp>Wird geladen…</iframe> </div> <div class="instruction" data-astro-cid-p7hsejmp> ${renderComponent($$result2, "Instruction", $$Instruction, { "h2": "About the Form", "note": "", "p": "", "p2": "", "data-astro-cid-p7hsejmp": true })} <ul data-astro-cid-p7hsejmp> <li data-astro-cid-p7hsejmp>This form is for you to submit your ideas and feature requests for future worlds. I am looking forward to your suggestions and will try to implement them as soon as possible.</li> <li data-astro-cid-p7hsejmp>This is a form provided by Google, created by McMeddon.</li> <li data-astro-cid-p7hsejmp>These Suggestions will be stored in a Google Spreadsheet.</li> </ul> <hr data-astro-cid-p7hsejmp> <br data-astro-cid-p7hsejmp>
Thanks a lot for your time and effort! 🙌
<br data-astro-cid-p7hsejmp> <br data-astro-cid-p7hsejmp> <hr data-astro-cid-p7hsejmp> <br data-astro-cid-p7hsejmp> <br data-astro-cid-p7hsejmp> <button class="btn btn-info" data-astro-cid-p7hsejmp><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdl7xhl_N6uXFkR0-ha-issucwTmc94E3wmdjcBN5yD0OgSig/viewform?usp=sf_link" data-astro-cid-p7hsejmp>Alternative direct link</a></button> <button class="btn btn-outline" data-astro-cid-p7hsejmp><a href="http://discord.mcmeddon.com" target="_blank" data-astro-cid-p7hsejmp> Issues? Let us know on discord!</a></button> <br data-astro-cid-p7hsejmp><br data-astro-cid-p7hsejmp> <br data-astro-cid-p7hsejmp> </div> </div> </main> ` })} `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/request.astro", void 0);

const $$file = "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/request.astro";
const $$url = "/request";

export { $$Request as default, $$file as file, $$url as url };
