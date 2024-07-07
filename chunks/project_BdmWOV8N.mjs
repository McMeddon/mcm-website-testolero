import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$Layout } from './Layout_C65wMquY.mjs';

const $$PatreonAPI = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/components/PatreonAPI.astro", void 0);

const $$Project = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main>projectpage:
${renderComponent($$result2, "Patreon", $$PatreonAPI, {})} </main> ` })}`;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/project.astro", void 0);

const $$file = "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/project.astro";
const $$url = "/project";

export { $$Project as default, $$file as file, $$url as url };
