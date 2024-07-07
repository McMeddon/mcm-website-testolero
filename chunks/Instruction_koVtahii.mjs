import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro("https://mcmeddon.com");
const $$Instruction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Instruction;
  const { h2, p, p2, note } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="instructions" data-astro-cid-7twfu3ya> <strong data-astro-cid-7twfu3ya>${h2}</strong> <br data-astro-cid-7twfu3ya> ${p} ${p2} ${renderSlot($$result, $$slots["default"])} </p> `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/components/Instruction.astro", void 0);

export { $$Instruction as $ };
