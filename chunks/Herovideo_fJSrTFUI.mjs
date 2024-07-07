import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://mcmeddon.com");
const $$Herovideo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Herovideo;
  const { src } = await Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="videowrapper" data-astro-cid-32jfbbu6> <video class="videohero" autoplay muted loop preload="none" loading="lazy" decoding="async" data-astro-cid-32jfbbu6> <source${addAttribute(src, "src")} type="video/mp4" data-astro-cid-32jfbbu6>
Your browser does not support the video tag.
</video> </div> `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/components/Herovideo.astro", void 0);

export { $$Herovideo as $ };
