import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro("https://mcmeddon.com");
const $$Herotext = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Herotext;
  const { h1, p, p2, body } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="herotitlewrapper text-5xl font-bold" data-astro-cid-b2xm5rsg> <h1 data-astro-cid-b2xm5rsg><span class="text-gradient" data-astro-cid-b2xm5rsg>${h1}</span></h1> <hr data-astro-cid-b2xm5rsg> <p data-astro-cid-b2xm5rsg>${p}<br data-astro-cid-b2xm5rsg>${p2} ${renderSlot($$result, $$slots["default"])}</p> </div> `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/components/Herotext.astro", void 0);

export { $$Herotext as $ };
