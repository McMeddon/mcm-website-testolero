import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import { a as $$Layout } from './Layout_C65wMquY.mjs';
/* empty css                           */

const $$Astro = createAstro("https://mcmeddon.com");
const $$Patreon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Patreon;
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Index", "data-astro-cid-rvvgq2pa": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-rvvgq2pa> <h1 data-astro-cid-rvvgq2pa><span class="text-gradient" data-astro-cid-rvvgq2pa>Weekly Maps, environments,<br data-astro-cid-rvvgq2pa> and more since 2020</span></h1> </main> ` })} `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/patreon.astro", void 0);

const $$file = "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/patreon.astro";
const $$url = "/patreon";

export { $$Patreon as default, $$file as file, $$url as url };
